import { useState, useEffect, useRef } from 'react'
import { FavIcon } from './FavIcon'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { Favorites } from './Favorites'
import { Link } from 'react-router-dom'

export function useVideogamesCard(favoritesChange = false) {
  const [favoritesIds, setFavoritesIds] = useState([])
  const { user } = useAuth()

  const getFavoritesFromDDBB = async () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      const docSnapshot = await getDoc(userRef)
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data()
        const videogameIds = userData.videogameIds || []
        setFavoritesIds(videogameIds)
      }
    }
  }

  useEffect(() => {
    getFavoritesFromDDBB()
    // console.log(favoritesIds)
  }, [user, favoritesChange])

  return {
    favoritesIds,
    getFavoritesFromDDBB
  }
}

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

function VideoGamesCard({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const [favoritesChange, setFavoritesChange] = useState(true)
  const { favoritesIds, getFavoritesFromDDBB } =
    useVideogamesCard(favoritesChange)
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
        } else {
          // El videojuego ya está en la lista, lo eliminamos
          videogameIds.splice(videogameIndex, 1)
          // favoritesIdsRef.current = videogameIds
        }
        getFavoritesFromDDBB() //Actualizamos lista de favoritos desde Firestore

        await setDoc(userRef, { videogameIds }, { merge: true })
        setSelectedVideogameId(null) // Deselecciona el videojuego
        setFavoritesChange((prevState) => {
          return !prevState
        })
      } catch (error) {
        throw new Error(
          'Ha ocurrido un error al añadir el videojuego a tus favoritos. Inténtalo de nuevo más tarde.'
        )
      }
    }
  }

  return videogames.map((videogame) => (
    <li key={videogame.id} className='videogames-element'>
      <h3>
        {videogame.title} <br />
        <small>{videogame.year}</small>
      </h3>
      <Link to={'videogames/' + videogame.id}>
        <figure className='image-container'>
          <img src={videogame.poster} alt={`${videogame.Title} poster`} />
          <FavIcon
            onClick={(event) => {
              event.preventDefault()
              setSelectedVideogameId(videogame.id)
              handleFavIconClick(videogame.id)
            }}
            isActive={
              selectedVideogameId === videogame.id ||
              favoritesIds.includes(videogame.id)
            }
          />
        </figure>
      </Link>
    </li>
  ))
}

export function VideogamesList({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIds, getFavoritesFromDDBB } = useVideogamesCard()
  const [showFavorites, setShowFavorites] = useState(false)

  // const { user } = useAuth()
  const hasVideogames = videogames?.length > 0

  const handleToggleShowFavorites = () => {
    setShowFavorites(!showFavorites)
  }

  return (
    <>
      <button onClick={handleToggleShowFavorites}>
        {showFavorites ? 'Mostrar todos' : 'Mostrar favoritos'}
      </button>
      {showFavorites ? (
        <Favorites favoriteIds={favoritesIds} />
      ) : (
        <ul className='videogames-list'>
          {hasVideogames ? (
            <VideoGamesCard
              videogames={videogames}
              selectedVideogame={selectedVideogameId}
              selectedVideogameId={selectedVideogameId}
            />
          ) : (
            <NoResults />
          )}
        </ul>
      )}
    </>
  )
}
