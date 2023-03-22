import { useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'

export function Favorites({ favoriteIds }) {
  const { favorites, getFavorites } = useFavorites({ favoriteIds })

  useEffect(() => {
    getFavorites()
  }, [favoriteIds])

  // console.log(favoriteIds)

  return favorites.map((favorite) => (
    <li key={favorite.id} className='videogames-element'>
      <h3>
        {favorite.title} <br />
        <small>{favorite.year}</small>
      </h3>
      <figure className='image-container'>
        <img src={favorite.poster} alt={`${favorite.Title} poster`} />
      </figure>
    </li>
  ))
}
