import { useState } from 'react'
import { searchVideogames, searchFavorites } from '../services/videogames.js'

export function useVideogames({ search }) {
  const [videogames, setVideogames] = useState([])

  const getVideogames = async () => {
    const newVideogames = await searchVideogames({ search })
    setVideogames(newVideogames)

    // searchFavorites({
    //   favoriteIds: [
    //     'tt0499549',
    //     'tt1630029',
    //     'tt10732794',
    //     'tt5884052',
    //     'tt0190641',
    //     'tt1540125',
    //     'tt0110912'
    //   ]
    // })
    //   .then((favorites) => console.log(favorites))
    //   .catch((error) => console.error(error))
  }

  return { videogames, getVideogames }
}
