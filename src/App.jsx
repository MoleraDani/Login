import { Register } from './components/Register'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
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
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  )
}

export default App
