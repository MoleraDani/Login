import { useState, useEffect } from 'react'
import {
  searchMostAnticipatedGames,
  searchBestGamesOf2022
} from '../services/videogames'
import { VideogamesCard } from '../components/VideogamesCard'

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function Home() {
  const [mostAnticipatedGames, setMostAnticipatedGames] = useState([])
  const [bestGames, setBestGames] = useState([])

  useEffect(() => {
    const fetchMostAnticipatedGames = () => {
      searchMostAnticipatedGames()
        .then((anticipatedGames) => {
          setMostAnticipatedGames(anticipatedGames)
        })
        .catch((error) => {
          console.error('Error fetching most anticipated games:', error)
        })
    }

    const fetchBestGames = () => {
      searchBestGamesOf2022()
        .then((topGames) => {
          setBestGames(topGames)
        })
        .catch((error) => {
          console.error('Error fetching best games:', error)
        })
    }

    fetchMostAnticipatedGames()
    fetchBestGames()
  }, [])

  return (
    <>
      <h2>Los 10 videojuegos más esperados del 2023</h2>
      <ul className='videogames-list'>
        {mostAnticipatedGames.length > 0 ? (
          mostAnticipatedGames.map((game) => (
            <VideogamesCard key={game.id} videogame={game} />
          ))
        ) : (
          <NoResults />
        )}
      </ul>
      <h2>Los mejores videojuegos del 2022</h2>
      <ul className='videogames-list'>
        {bestGames.length > 0 ? (
          bestGames.map((game) => (
            <VideogamesCard key={game.id} videogame={game} />
          ))
        ) : (
          <NoResults />
        )}
      </ul>
    </>
  )
}
