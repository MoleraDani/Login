import { useState } from 'react'
import { searchFavorites } from '../services/videogames.js'

export function useFavorites({ favoriteIds }) {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getFavorites = async () => {
    const newFavorites = await searchFavorites({ favoriteIds })
    setFavorites(newFavorites)
    setIsLoading(false)
  }

  return { favorites, getFavorites, isLoading }
}
