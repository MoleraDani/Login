import { useState } from 'react'
import { searchVideogames } from '../services/videogames.js'

export function useVideogames({ search }) {
  const [videogames, setVideogames] = useState([])

  const getVideogames = async () => {
    const newVideogames = await searchVideogames({ search })
    setVideogames(newVideogames)
  }

  return { videogames, getVideogames }
}
