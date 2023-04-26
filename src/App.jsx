import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { VideogameDetails } from './Pages/VideogameDetails'
import { BestVideogames } from './Pages/BestVideogames'
import { ProtectedRoute } from './components/ProtectedRoute'
import { SearchResultsProvider } from './context/SearchResults'
import { Layout } from './components/Layout'
import { Favorites } from './Pages/Favorites'

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
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/videogames/:videogameId'
            element={
              <Layout>
                <VideogameDetails />
              </Layout>
            }
          />
          <Route
            path='/top25'
            element={
              <Layout>
                <BestVideogames />
              </Layout>
            }
          />
          <Route
            path='/favorites'
            element={
              <Layout>
                <Favorites />
              </Layout>
            }
          />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </SearchResultsProvider>
  )
}

export default App
