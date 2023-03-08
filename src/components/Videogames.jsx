import { VideogamesList } from './VideogamesList'
import { useEffect, useRef, useState } from 'react'
import { useVideogames } from '../hooks/useVideogames'
import './Videogames.css'
import { useAuth } from '../hooks/useAuth'

export function useSearch({ search }) {
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput) {
      isFirstInput.current = search === ''
    }
  }, [])
}

export function Videogames() {
  const { logout, user } = useAuth()
  const [search, setSearch] = useState('')
  const { videogames, getVideogames } = useVideogames({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    const field = new FormData(event.target)
    const query = field.get('query')
    setSearch(query)
    console.log(search)
  }

  useEffect(() => {
    getVideogames()
  }, [search])

  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='page'>
      <header className='header'>
        <button onClick={handleLogout}>Log out</button>
        <h3>Busqueda de videojuegos</h3>
        <form action='' onSubmit={handleSubmit}>
          <input type='text' name='query' id='' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <VideogamesList videogames={videogames} />
      </main>
    </div>
  )
}
