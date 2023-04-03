import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { VideogameDetails } from './Pages/VideogameDetails'
import { BestVideogames } from './Pages/BestVideogames'
import { ProtectedRoute } from './components/ProtectedRoute'
import { SearchResultsProvider } from './context/SearchResults'

export function useSearch({ search }) {
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput) {
      isFirstInput.current = search === ''
    }
  }, [])
}

function App() {
  return (
    <SearchResultsProvider>
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
          <Route
            path='/videogames/:videogameId'
            element={<VideogameDetails />}
          />
          <Route path='/top25' element={<BestVideogames />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </SearchResultsProvider>
  )
}

export default App
