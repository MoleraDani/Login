import { useFavorites } from '../hooks/useFavorites'

export function Favorites({ favoriteIds }) {
  const { favorites, getFavorites } = useFavorites({ favoriteIds })

  console.log(favorites)

  return (
    //     <div className='page'>
    //       <header className='header'>
    //         <button onClick={handleLogout}>Log out</button>
    //         <h3>Busqueda de videojuegos</h3>
    //       </header>
    //       <main>
    // <ul className='videogames-list'>
    favorites.map((favorite) => (
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
    //     </ul>
    //   </main>
    // </div>
  )
}
