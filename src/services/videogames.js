const MOVIE_ENDPOINT = `https://www.omdbapi.com/?apikey=d5cdd532&s=`

export const searchVideogames = async ({ search }) => {
  if (search === '') return

  try {
    const res = await fetch(`${MOVIE_ENDPOINT}${search}`)
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
