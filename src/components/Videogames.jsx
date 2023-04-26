import { VideogamesList } from './VideogamesList'
import { useState } from 'react'
import './Videogames.css'
import { ProfileForm } from './ProfileForm'

// export function useSearch({ search }) {
//   const isFirstInput = useRef(true)

//   useEffect(() => {
//     if (isFirstInput) {
//       isFirstInput.current = search === ''
//     }
//   }, [])
// }

export function Videogames() {
  const [showSearch, setShowSearch] = useState(true)

  const handleToggleSearchVisibility = (showFavorites) => {
    setShowSearch(!showFavorites)
  }

  return (
    <>
      <section>
        <VideogamesList onToggleShowFavorites={handleToggleSearchVisibility} />
        <ProfileForm />
      </section>
    </>
  )
}
