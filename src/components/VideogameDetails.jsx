import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

export function VideogameDetails() {
  const { videogameId } = useParams()
  const { favorites, getFavorites } = useFavorites({
    favoriteIds: [videogameId]
  })

  useEffect(() => {
    getFavorites()
  }, [videogameId])

  // const videogameDetail = favorites[0]
  // console.log(videogameDetail)

  return favorites.map((favorite) => (
    <section key={favorite.id}>
      <h3>
        {favorite.title} <br />
        <small>{favorite.year}</small>
      </h3>
      <figure className='image-container'>
        <img src={favorite.poster} alt={`${favorite.Title} poster`} />
      </figure>
    </section>
  ))

  // return <p>{videogameDetail.title}</p>
}
