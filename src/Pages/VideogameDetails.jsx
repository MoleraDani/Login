import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelected } from '../hooks/useSelected'
import { FavIcon } from '../components/FavIcon'
import { useAuth } from '../hooks/useAuth'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useVideogamesCard } from '../hooks/useVideogamesCard'

export function VideogameDetails() {
  const { videogameId } = useParams()
  const { selected, getSelected } = useSelected({
    id: [videogameId]
  })
  const { user } = useAuth()
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIds } = useVideogamesCard()

  useEffect(() => {
    getSelected()
  }, [videogameId])

  // console.log(selected)

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  return (
    <section key={selected.id}>
      <h3>
        {selected.title} <br />
        <small>{selected.year}</small>
      </h3>
      <figure className='image-container'>
        <img src={selected.poster} alt={`${selected.Title} poster`} />
        <FavIcon
          onClick={(event) => {
            event.preventDefault()
            setSelectedVideogameId(selected.id)
            handleFavIconClick({
              selectedVideogame: selected.id,
              user,
              handleFavoriteUpdate
            })
          }}
          isActive={
            selectedVideogameId === selected.id ||
            favoritesIds.includes(selected.id)
          }
        />
      </figure>
      <small>{selected.rating}</small>
      {selected.trailer && (
        <div>
          <h4>Trailer</h4>
          <video src={selected.trailer} controls></video>
        </div>
      )}
      {selected.screenshots?.length > 0 && (
        <div>
          <h4>Screenshots</h4>
          {selected.screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>
      )}
      <p>{selected.description}</p>
    </section>
  )

  // return <p>{videogameDetail.title}</p>
}
