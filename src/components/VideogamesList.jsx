import { useState, useEffect } from 'react'
import { FavIcon } from './FavIcon'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'
import { setDoc, doc, getDoc } from 'firebase/firestore'

export function useVideogamesCard() {
  const [favoritesId, setFavoritesIds] = useState([])

  const { user } = useAuth()

  const getFavoritesFromDDBB = async () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      getDoc(userRef).then((doc) => {
        if (doc.exists()) {
          const userData = doc.data()
          const videogameIds = userData.videogameIds || []
          setFavoritesIds(videogameIds)
        }
      })
    }
  }

  return {
    favoritesId,
    setFavoritesIds,
    getFavoritesFromDDBB
  }
}

function VideogamesCard({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesId, getFavoritesFromDDBB, setFavoritesIds } =
    useVideogamesCard()
  console.log({ favoritesId })

  const { user } = useAuth()

  const handleFavIconClick = async (selectedVideogame) => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid)

        // Obtenemos los datos actuales del documento del usuario
        const userSnapshot = await getDoc(userRef)
        const userData = userSnapshot.exists() ? userSnapshot.data() : {}

        // Comprobamos si el videojuego ya está en la lista de favoritos
        const videogameIds = userData?.videogameIds || []
        const videogameIndex = videogameIds.indexOf(selectedVideogame)

        if (!videogameIds.includes(selectedVideogame)) {
          videogameIds.push(selectedVideogame)

          setFavoritesIds([...favoritesId, selectedVideogame])

          // Actualizamos el documento del usuario con la nueva lista de favoritos
        } else {
          // El videojuego ya está en la lista, lo eliminamos
          videogameIds.splice(videogameIndex, 1)
          setFavoritesIds(videogameIds)
        }
        await setDoc(userRef, { videogameIds }, { merge: true })
      } catch (error) {
        throw new Error(
          'Ha ocurrido un error al añadir el videojuego a tus favoritos. Inténtalo de nuevo más tarde.'
        )
      }
    }
  }

  useEffect(() => {
    getFavoritesFromDDBB()
  }, [user, selectedVideogameId])

  return videogames.map((videogame) => (
    <li key={videogame.id} className='videogames-element'>
      <h3>
        {videogame.title} <br />
        <small>{videogame.year}</small>
      </h3>
      <figure className='image-container'>
        <img src={videogame.poster} alt={`${videogame.Title} poster`} />
        <FavIcon
          onClick={() => {
            setSelectedVideogameId(videogame.id)
            handleFavIconClick(videogame.id)
          }}
          isActive={
            selectedVideogameId === videogame.id ||
            favoritesId.includes(videogame.id)
          }
        />
      </figure>
    </li>
  ))
}

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function VideogamesList({ videogames }) {
  const hasVideogames = videogames?.length > 0

  return (
    <ul className='videogames-list'>
      {hasVideogames ? (
        <VideogamesCard videogames={videogames} />
      ) : (
        <NoResults />
      )}
    </ul>
  )
}
