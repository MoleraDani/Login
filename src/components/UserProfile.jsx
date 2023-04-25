// import { useAuth } from '../hooks/useAuth'

// export function UserProfile() {
//   const { user } = useAuth()

//   if (!user) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='user-profile'>
//       <img src={user.photoURL} alt='User Profile' className='profile-image' />
//       <p className='user-description'>{user.displayName}</p>
//     </div>
//   )
// }
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'

export function UserProfile() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const auth = useAuth()
  const user = auth && auth.user ? auth.user : null

  useEffect(() => {
    const fetchUser = async () => {
      if (!user || !user.uid) {
        setLoading(false)
        return
      }

      try {
        const userDocRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
          setUserData({ id: userDoc.id, ...userDoc.data() })
        } else {
          console.error('No user found with the given userId:', user.uid)
        }
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [user])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userData) {
    return (
      <div>
        {' '}
        <img src='https://via.placeholder.com/150' width='150' height='150' />
      </div>
    )
  }

  return (
    <div>
      <img
        src={userData.profilePicture || 'https://via.placeholder.com/150'}
        alt={userData.displayName}
        width='150'
        height='150'
      />
      <h2>{userData.description}</h2>
    </div>
  )
}
