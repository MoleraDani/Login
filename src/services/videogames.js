const MOVIE_ENDPOINT = `https://www.omdbapi.com/?apikey=d5cdd532`

export const searchVideogames = async ({ search }) => {
  if (search === '') return

  try {
    const res = await fetch(`${MOVIE_ENDPOINT}&s=${search}`)
    const json = await res.json()

    const videogames = json.Search

    return videogames?.map((videogame) => ({
      id: videogame.imdbID,
      title: videogame.Title,
      year: videogame.Year,
      poster: videogame.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

export const searchFavorites = async ({ favoriteIds }) => {
  const promises = favoriteIds.map((id) =>
    fetch(`${MOVIE_ENDPOINT}&i=${id}`).then((res) => res.json())
  )
  try {
    const favorites = await Promise.all(promises)
    return favorites?.map((favorite) => ({
      id: favorite.imdbID,
      title: favorite.Title,
      year: favorite.Year,
      poster: favorite.Poster
    }))
  } catch (e) {
    throw new Error('Error getting favorite movies')
  }
}
