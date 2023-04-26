import { useState, useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import { FavIcon } from '../components/FavIcon'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useAuth } from '../hooks/useAuth'
import { RaceBy } from '@uiball/loaders'
import { Link } from 'react-router-dom'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'

export function Favorites() {
  const { favoritesIds } = useVideogamesFavorites()
  const { favorites, getFavorites, isLoading } = useFavorites({ favoritesIds })
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)

  const { user } = useAuth()

  useEffect(() => {
    if (favoritesIds.length > 0) {
      getFavorites()
    }
  }, [favoritesIds])

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  return (
    <>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <section>
          <ul>
            {favorites.map((favorite) => (
              <li key={favorite.id} className='videogames-element'>
                <h3>
                  {favorite.title} <br />
                  <small>{favorite.year}</small>
                </h3>
                <Link to={'/videogames/' + favorite.id}>
                  <figure className='image-container'>
                    <img
                      src={
                        favorite.poster ||
                        'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
                      }
                      alt={`${favorite.Title} poster`}
                    />
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
                        favoritesIds.includes(favorite.id)
                      }
                    />
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
