import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { VideogameDetails } from './Pages/VideogameDetails'
import { useVideogamesCard } from './hooks/useVideogamesCard'

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

  return (
    <main className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/videogames/:videogameId' element={<VideogameDetails />} />

        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  )
}

export default App
