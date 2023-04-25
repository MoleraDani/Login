import { Filtro } from './Filtro'
import { FilterGenders } from './FilterGender'
import { useAuth } from '../hooks/useAuth'
import { UserProfile } from './UserProfile'
import { useSearchResults } from '../context/SearchResults'
import { searchVideogames } from '../services/videogames'
import { useNavigate } from 'react-router-dom'

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
      <FilterGenders />
      <Filtro />
      <button onClick={handleLogout}>Log out</button>
      <UserProfile />
      {showSearch && (
        <>
          <h3>Busqueda de videojuegos</h3>
          <form action='' onSubmit={handleSubmit}>
            <input type='text' name='query' id='' />
            <button>Buscar</button>
          </form>
        </>
      )}
    </header>
  )
}
