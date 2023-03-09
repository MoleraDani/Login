import { useState } from 'react'
import { searchFavorites } from '../services/videogames.js'

export function useFavorites({ favoriteIds }) {
  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    const newFavorites = await searchFavorites({ favoriteIds })
    setFavorites((prevState) => [...prevState, newFavorites])
    console.log(favorites)
  }

  return { favorites, getFavorites }
}
