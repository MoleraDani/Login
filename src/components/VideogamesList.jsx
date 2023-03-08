import { useState } from 'react'
import { FavIcon } from './FavIcon'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase'

function VideogamesCard({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { user } = useAuth()

  const handleFavIconClick = async () => {
    if (user) {
      const uid = user.uid
      const favoritesRef = db
        .collection('users')
        .doc(uid)
        .collection('favorites')
        .doc(selectedVideogameId)

      const doc = await favoritesRef.get()

      if (doc.exists) {
        await favoritesRef.update({
          timestamp: new Date().toISOString()
        })
      } else {
        await favoritesRef.set({
          timestamp: new Date().toISOString()
        })
      }
    }
  }

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
            handleFavIconClick()
          }}
          isActive={selectedVideogameId === videogame.id}
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
