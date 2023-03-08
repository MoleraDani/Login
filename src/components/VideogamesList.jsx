import { useState } from 'react'
import { FavIcon } from './FavIcon'
import { useAuth } from '../hooks/useAuth'
import { db } from '../firebase.js'

function VideogamesCard({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { user } = useAuth()

  const handleFavIconClick = () => {
    if (user) {
      const userRef = db.collection('users').doc(user.uid)
      userRef.update({
        videogameIds:
          firebase.firestore.FieldValue.arrayUnion(selectedVideogameId)
      })
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
