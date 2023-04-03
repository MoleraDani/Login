import { useState } from 'react'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { VideogamesCard } from './VideogamesCard'
import { Favorites } from './Favorites'
import { useSearchResults } from '../context/SearchResults'

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function VideogamesList({ onToggleShowFavorites }) {
  const { favoritesIds } = useVideogamesFavorites()
  const [showFavorites, setShowFavorites] = useState(false)
  const { searchResults } = useSearchResults()

  // const { user } = useAuth()
  const hasVideogames = searchResults?.length > 0

  const handleToggleShowFavorites = () => {
    setShowFavorites(!showFavorites)
    if (onToggleShowFavorites) {
      onToggleShowFavorites(!showFavorites)
    }
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
          {hasVideogames ? <VideogamesCard /> : <NoResults />}
        </ul>
      )}
    </>
  )
}
