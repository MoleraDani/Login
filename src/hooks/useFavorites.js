import { useState } from 'react'
import { searchFavorites } from '../services/videogames.js'

export function useFavorites({ favoritesIds }) {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getFavorites = async () => {
    const newFavorites = await searchFavorites({ favoriteIds: favoritesIds })
    setFavorites(newFavorites)
    setIsLoading(false)
  }

  return { favorites, getFavorites, isLoading }
}
