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
import { EditUser } from './Pages/EditUser'
import { GamesByGenre } from './Pages/GamesByGenre'
import { Videogames } from './Pages/Videogames'
import { PrivacyNotice } from './Pages/PrivacyNotice'
import { LegalNotice } from './Pages/LegalNotice'
import { ScrollToTop } from './components/ScrollToTop'

// export function useSearch ({ search }) {
//   const isFirstInput = useRef(true)

//   useEffect(() => {
//     if (isFirstInput) {
//       isFirstInput.current = search === ''
//     }
//   }, [])
// }

function App () {
  return (
    <SearchResultsProvider>
      <main className='App'>
        <ScrollToTop />
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
            path='/videogames'
            element={
              <ProtectedRoute>
                <Layout>
                  <Videogames />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/videogames/:videogameId'
            element={
              <ProtectedRoute>
                <Layout>
                  <VideogameDetails />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/top25'
            element={
              <ProtectedRoute>
                <Layout>
                  <BestVideogames />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/favorites'
            element={
              <ProtectedRoute>
                <Layout>
                  <Favorites />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/userprofile'
            element={
              <ProtectedRoute>
                <Layout>
                  <EditUser />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/genre/:genre'
            element={
              <ProtectedRoute>
                <Layout>
                  <GamesByGenre />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path='/register' element={<Register />} />

          <Route
            path='/PrivacyNotice'
            element={
              <ProtectedRoute>
                <Layout>
                  <PrivacyNotice />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/LegalNotice'
            element={
              <ProtectedRoute>
                <Layout>
                  <LegalNotice />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </SearchResultsProvider>
  )
}

export default App
