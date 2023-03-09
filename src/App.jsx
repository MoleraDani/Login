import { Register } from './components/Register'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Videogames } from './components/Videogames'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Favorites } from './components/Favorites'
import { useVideogamesCard } from './components/VideogamesList'

export function useSearch({ search }) {
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput) {
      isFirstInput.current = search === ''
    }
  }, [])
}

function App() {
  const { favoritesId } = useVideogamesCard()
  console.log(favoritesId)

  return (
    <main className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Videogames />
            </ProtectedRoute>
          }
        />
        <Route
          path='/favoritos'
          element={
            <ProtectedRoute>
              <Favorites favoriteIds={favoritesId} />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  )
}

export default App
