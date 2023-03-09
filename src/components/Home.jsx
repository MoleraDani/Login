import './Home.css'
import { useAuth } from '../hooks/useAuth'

export function Home() {
  const { logout, user } = useAuth()

  // console.log(user)
  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='Jujutsu'>
      <h1>Bienvenido a la escuela</h1>
      <img
        src='https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/04/08/B7EFE299-4B81-4E5C-BFD6-0E079D3EC331/jujutsu-kaisen_98.jpg?crop=1600,900,x103,y0&width=1900&height=1069&optimize=high&format=webply'
        alt=''
      />
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
