import { useAuth } from '../hooks/useAuth'
import { UserProfile } from './Header/UserProfile'
import { useSearchResults } from '../context/SearchResults'
import { searchVideogames } from '../services/videogames'
import { useNavigate } from 'react-router-dom'
import { Menu } from './Header/Menu'

export function Header({ showSearch }) {
  const { updateSearchResults } = useSearchResults()
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const field = new FormData(event.target)
    const query = field.get('query')
    updateSearchResults(await searchVideogames({ search: query }))
    navigate('/')
  }

  return (
    <header className='header'>
      <Menu />
      <button onClick={handleLogout}>Log out</button>
      {showSearch && (
        <>
          <h3>Busqueda de videojuegos</h3>
          <form action='' onSubmit={handleSubmit}>
            <input type='text' name='query' id='' />
            <button>Buscar</button>
          </form>
        </>
      )}
      <UserProfile />
    </header>
  )
}
