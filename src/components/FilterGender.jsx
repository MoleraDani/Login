import { useEffect, useId, useState } from 'react'

export function FilterGenders() {
  const genderFitlerID = useId()
  const [filter, setFilter] = useState()

  const handleChangeGender = (event) => {
    const newValue = event.target.value
    setFilter(newValue)
  }
  useEffect(() => {
    console.log(filter)
  }, [filter])
  return (
    <select
      onChange={handleChangeGender}
      name='genderFilter'
      id={genderFitlerID}
    >
      <option value='action'>Action</option>
      <option value='arcade2'>Arcade</option>
      <option value='role-playing-games-rpg'>RPG</option>
      <option value='indie'>Indie</option>
      <option value='adventure'>Adventure</option>
      <option value='strategy'>Strategy</option>
      <option value='shooter'>Shooter</option>
      <option value='casual'>Casual</option>
      <option value='simulation'>Simulation</option>
      <option value='indie'>Puzzle</option>
      <option value='platformer'>Platform</option>
      <option value='racing'>Racing</option>
      <option value='massively-multiplayer'>Masive multiplayer</option>
      <option value='sports'>Sports</option>
      <option value='family'>Family</option>
      <option value='fighting'>Fighting</option>
      <option value='board-games'>Board Games</option>
      <option value='educational'>Educational</option>
      <option value='card'>Card</option>
    </select>
  )
}
