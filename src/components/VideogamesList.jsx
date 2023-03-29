import { useState } from 'react'
import { useVideogamesCard } from '../hooks/useVideogamesCard'
import { VideogamesCard } from './VideogamesCard'
import { Favorites } from './Favorites'

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function VideogamesList({ videogames, onToggleShowFavorites }) {
  const [selectedVideogameId] = useState(null)
  const { favoritesIds } = useVideogamesCard()
  const [showFavorites, setShowFavorites] = useState(false)

  // const { user } = useAuth()
  const hasVideogames = videogames?.length > 0

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
          {hasVideogames ? (
            <VideogamesCard
              videogames={videogames}
              // selectedVideogame={selectedVideogameId}
              // selectedVideogameId={selectedVideogameId}
            />
          ) : (
            <NoResults />
          )}
        </ul>
      )}
    </>
  )
}
