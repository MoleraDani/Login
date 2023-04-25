import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'

export function Comments({ videogameId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    async function fetchComments() {
      //Crear una consulta para obtener los comentarios del videojuego
      const q = query(
        collection(db, 'comments'),
        where('videogameId', '==', videogameId)
      )
      const querySnapshot = await getDocs(q)
      //Convertimos a un array de objetos mas fácil de leer
      const fetchedComments = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      setComments(fetchedComments)
      console.log(fetchedComments)
    }

    fetchComments()
  }, [videogameId])

  async function addComment() {
    if (newComment.trim() === '') {
      return
    }

    //Crear un nuevo documento para el comentario en la base de datos
    const docRef = await addDoc(collection(db, 'comments'), {
      videogameId,
      text: newComment,
      createdAt: new Date(),
      username: user.displayName,
      profileImage: user.photoURL
    })

    setComments([
      ...comments,
      {
        id: docRef.id,
        videogameId,
        text: newComment,
        username: user.displayName,
        profileImage: user.photoURL
      }
    ])
    setNewComment('')
  }

  return (
    <div>
      <h4>Comentarios:</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <img
              src={comment.profileImage}
              alt={`${comment.username} profile image`}
            />
            {comment.username}: {comment.text}
          </li>
        ))}
      </ul>
      <input
        type='text'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder='Escribe un comentario...'
      />
      <button onClick={addComment}>Enviar comentario</button>
    </div>
  )
}
