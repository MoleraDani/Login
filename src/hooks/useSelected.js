import { useState } from 'react'
import { searchSelected } from '../services/videogames.js'

export function useSelected({ id }) {
  const [selected, setSelected] = useState([])

  //Obtenemos datos
  const getSelected = async () => {
    const newSelected = await searchSelected({ id })
    setSelected(newSelected)
  }

  return { selected, getSelected }
}
