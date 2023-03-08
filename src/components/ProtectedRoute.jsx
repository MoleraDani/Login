import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  //Al ser useAuth una llamada asincrona, es necesario para que pueda renderizar el children correctamente
  if (loading) return <h1>Cargando</h1>

  //Si no hay usuario redirigimos a login
  if (!user) return <Navigate to='/login' />

  return <>{children}</>
}
