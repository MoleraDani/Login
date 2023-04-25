import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export function ProfileForm() {
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const { user, updateProfileImage, updateUserDescription } = useAuth()

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
    }
    if (description) {
      await updateUserDescription(description)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='file' onChange={handleImageChange} />
      <input
        type='text'
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type='submit'>Actualizar perfil</button>
    </form>
  )
}
