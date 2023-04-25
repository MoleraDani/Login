import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelected } from '../hooks/useSelected'
import { FavIcon } from '../components/FavIcon'
import { useAuth } from '../hooks/useAuth'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { RaceBy } from '@uiball/loaders'
import { Header } from '../components/Header'
import { Comments } from '../components/Comments'

export function VideogameDetails() {
  const { videogameId } = useParams()
  const { selected, getSelected, isLoading } = useSelected({
    id: [videogameId]
  })
  const { favoritesIds } = useVideogamesFavorites()
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    getSelected()
  }, [videogameId])

  // console.log(selected)

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }
  return (
    <>
      <Header showSearch={true} />
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <section key={selected.id}>
          <h3>
            {selected.title} <br />
            <small>{selected.year}</small>
          </h3>
          <figure className='image-container'>
            <img
              src={
                selected.poster ||
                'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
              }
              alt={`${selected.Title} poster`}
            />
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
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
          <p>{selected.description}</p>
          <Comments videogameId={videogameId} />
        </section>
      )}
    </>
  )

  // return <p>{videogameDetail.title}</p>
}
