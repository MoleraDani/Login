import { useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import { Link } from 'react-router-dom'

export function Favorites({ favoriteIds }) {
  const { favorites, getFavorites } = useFavorites({ favoriteIds })

  useEffect(() => {
    getFavorites()
  }, [favoriteIds])

  return (
    <div className='page'>
      <header className='header'>
        {/* <button onClick={handleLogout}>Log out</button> */}
        <span className='line'>
          {/*router link*/}
          <Link to='/'>Home</Link>
        </span>
      </header>
      <main>
        <ul className='videogames-list'>
          {favorites.map((favorite) => (
            <li key={favorite.id} className='videogames-element'>
              <h3>
                {favorite.title} <br />
                <small>{favorite.year}</small>
              </h3>
              <figure className='image-container'>
                <img src={favorite.poster} alt={`${favorite.Title} poster`} />
              </figure>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
