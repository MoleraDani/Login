import { useState } from 'react'
import { FavIcon } from './FavIcon'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useVideogamesCard } from '../hooks/useVideogamesCard'
import { handleFavIconClick } from '../utils/handleFavIconClick'

export function VideogamesCard({ videogames }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIds } = useVideogamesCard()
  const { user } = useAuth()

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
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
              handleFavIconClick({
                selectedVideogame: videogame.id,
                user,
                handleFavoriteUpdate
              }) // Pasar los argumentos necesarios
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
