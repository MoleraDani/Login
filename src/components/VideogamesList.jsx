import { useState, useEffect, useRef } from 'react'
import { FavIcon } from './FavIcon'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { Favorites } from './Favorites'

export function useVideogamesCard() {
  const favoritesIdsRef = useRef([])

  const { user } = useAuth()

  const getFavoritesFromDDBB = async () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      getDoc(userRef).then((doc) => {
        if (doc.exists()) {
          const userData = doc.data()
          const videogameIds = userData.videogameIds || []
          favoritesIdsRef.current = videogameIds
        }
      })
    }
  }

  return {
    favoritesIdsRef,
    getFavoritesFromDDBB
  }
}

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function VideogamesList({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIdsRef, getFavoritesFromDDBB } = useVideogamesCard()
  const [showFavorites, setShowFavorites] = useState(false)

  const { user } = useAuth()
  const hasVideogames = videogames?.length > 0

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

          favoritesIdsRef.current = [
            ...favoritesIdsRef.current,
            selectedVideogame
          ]

          // Actualizamos el documento del usuario con la nueva lista de favoritos
        } else {
          // El videojuego ya está en la lista, lo eliminamos
          videogameIds.splice(videogameIndex, 1)
          favoritesIdsRef.current = videogameIds
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
  }, [user, favoritesIdsRef])

  const handleToggleShowFavorites = () => {
    setShowFavorites(!showFavorites)
  }

  return (
    <>
      <button onClick={handleToggleShowFavorites}>
        {showFavorites ? 'Mostrar todos' : 'Mostrar favoritos'}
      </button>
      {showFavorites ? (
        <Favorites favoriteIds={favoritesIdsRef.current} />
      ) : (
        <ul className='videogames-list'>
          {hasVideogames ? (
            videogames.map((videogame) => (
              <li key={videogame.id} className='videogames-element'>
                <h3>
                  {videogame.title} <br />
                  <small>{videogame.year}</small>
                </h3>
                <figure className='image-container'>
                  <img
                    src={videogame.poster}
                    alt={`${videogame.Title} poster`}
                  />
                  <FavIcon
                    onClick={() => {
                      setSelectedVideogameId(videogame.id)
                      handleFavIconClick(videogame.id)
                    }}
                    isActive={
                      selectedVideogameId === videogame.id ||
                      favoritesIdsRef.current.includes(videogame.id)
                    }
                  />
                </figure>
              </li>
            ))
          ) : (
            <NoResults />
          )}
        </ul>
      )}
    </>
  )
}
