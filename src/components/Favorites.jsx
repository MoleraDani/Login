import { useState, useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import { FavIcon } from './FavIcon'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useAuth } from '../hooks/useAuth'

export function Favorites({ favoriteIds }) {
  const { favorites, getFavorites } = useFavorites({ favoriteIds })
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)

  const { user } = useAuth()

  useEffect(() => {
    getFavorites()
  }, [favoriteIds])

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  return favorites.map((favorite) => (
    <li key={favorite.id} className='videogames-element'>
      <h3>
        {favorite.title} <br />
        <small>{favorite.year}</small>
      </h3>
      <figure className='image-container'>
        <img src={favorite.poster} alt={`${favorite.Title} poster`} />
        <FavIcon
          onClick={(event) => {
            event.preventDefault()
            setSelectedVideogameId(favorite.id)
            handleFavIconClick({
              selectedVideogame: favorite.id,
              user,
              handleFavoriteUpdate
            })
          }}
          isActive={
            selectedVideogameId === favorite.id ||
            favoriteIds.includes(favorite.id)
          }
        />
      </figure>
    </li>
  ))
}
