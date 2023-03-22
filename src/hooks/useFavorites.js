import { useState } from 'react'
import { searchFavorites } from '../services/videogames.js'

export function useFavorites({ favoriteIds }) {
  const [favorites, setFavorites] = useState([])

  console.log(favoriteIds)
  console.log('hola')

  const getFavorites = async () => {
    const newFavorites = await searchFavorites({ favoriteIds })
    setFavorites(newFavorites)
  }

  return { favorites, getFavorites }
}
