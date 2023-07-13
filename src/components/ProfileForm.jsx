import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useUserProfile } from '../hooks/useUserProfile'
import './ProfileForm.css'
export function ProfileForm () {
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const { user, updateProfileImage, updateUserDescription } = useAuth()
  const { userData } = useUserProfile()

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (image) {
      await updateProfileImage(image)
      setImage(null)
    }
    if (description) {
      await updateUserDescription(description)
      setDescription('')
    }
  }

  return (
    <>
      <section>
        <h4>Información de usuario</h4>
        <p>
          Imagen de perfil:
          <img
            className='userprofile-img'
            src={user?.photoURL}
            alt={`Imagen de perfil de ${user.displayName}`}
          />
        </p>
        <p>email: {user.email}</p>
        <p>Nombre de usuario: {user.displayName}</p>
        <p>Descripción: {userData?.description}</p>
      </section>
      <section>
        <form className='form2' onSubmit={handleSubmit}>
          <label htmlFor='file'>Nueva imagen de perfil:</label>
          <input className='selecarc' type='file' onChange={handleImageChange} />
          <label htmlFor='user-description'>Nueva descripción:</label>
          <textarea
            type='text'
            value={description}
            id='user-description'
            onChange={handleDescriptionChange}
          />
          <button className='actperfil' type='submit'>Actualizar perfil</button>
        </form>
        <footer>
          <p>&copy; 2023 JuegosFlix. Todos los derechos reservados.</p>
        </footer>
      </section>
    </>
  )
}
