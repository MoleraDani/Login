import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'

// test@test Test123456789!
const LOGIN_URL = '/auth'

export function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()

  const emailRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(email, pwd)
      setSuccess(true)
      setEmail('')
      setPwd('')
    } catch (e) {
      setErrMsg(e.message)
      errRef.current.focus()
      //TODO gestionar los códigos de error para mostrarlos personalizados.
    }
  }

  return (
    <>
      {success && setTimeout(() => navigate('/'), 2000) ? (
        <section>
          <h1>Has iniciado sesion</h1>
          <br />
          <p>Bienvenido {user.displayName}</p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Email:</label>
            <input
              type='text'
              id='username'
              ref={emailRef}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Iniciar sesión</button>
          </form>
          <p>
            Necesitas Registrarte?
            <br />
            <span className='line'>
              {/*router link*/}
              <Link to='/register'>Registrarse</Link>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
