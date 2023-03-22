// import { useState, useEffect } from 'react'
// import { useAuth } from '../hooks/useAuth'
// import { doc, getDoc } from 'firebase/firestore'
// import { db } from '../firebase'

// export function useVideogamesCard() {
//   // const favoritesIdsRef = useRef([])

//   // const { user } = useAuth()

//   // const getFavoritesFromDDBB = async () => {
//   //   if (user) {
//   //     const userRef = doc(db, 'users', user.uid)
//   //     getDoc(userRef).then((doc) => {
//   //       if (doc.exists()) {
//   //         const userData = doc.data()
//   //         const videogameIds = userData.videogameIds || []
//   //         favoritesIdsRef.current = videogameIds
//   //       }
//   //     })
//   //   }
//   // }

//   const [favoritesIds, setFavoritesIds] = useState([])

//   const { user } = useAuth()

//   const getFavoritesFromDDBB = async () => {
//     if (user) {
//       const userRef = doc(db, 'users', user.uid)
//       const docSnapshot = await getDoc(userRef)
//       if (docSnapshot.exists()) {
//         const userData = docSnapshot.data()
//         const videogameIds = userData.videogameIds || []
//         setFavoritesIds(videogameIds)
//       }
//     }
//   }

//   useEffect(() => {
//     getFavoritesFromDDBB()
//   }, [user])

//   return {
//     favoritesIds,
//     getFavoritesFromDDBB
//   }
// }
