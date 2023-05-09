import { useState, useEffect } from 'react'
import { VideogamesCard } from '../components/VideogamesCard'
import { useMostAnticipatedGames } from '../hooks/useMostAnticipatedGames'
import { useBestGames } from '../hooks/useBestGames'
import { RaceBy } from '@uiball/loaders'

export function Home() {
  const {
    isError,
    isLoading,
    fetchMostAnticipatedGames,
    mostAnticipatedGames
  } = useMostAnticipatedGames()
  const { fetchBestGames, bestGames, isErrorBestGames, isLoadingBestGames } =
    useBestGames()

  useEffect(() => {
    fetchMostAnticipatedGames()
  }, [])
  useEffect(() => {
    fetchBestGames()
  }, [])

  return (
    <>
      <h2>Los 10 videojuegos más esperados del 2023</h2>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <ul className='videogames-list'>
          {mostAnticipatedGames.length > 0 ? (
            mostAnticipatedGames.map((game) => (
              <VideogamesCard key={game.id} videogame={game} />
            ))
          ) : (
            <p>{isError}</p>
          )}
        </ul>
      )}
      <h2>Los mejores videojuegos del 2022</h2>
      {isLoadingBestGames ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <ul className='videogames-list'>
          {bestGames.length > 0 ? (
            bestGames.map((game) => (
              <VideogamesCard key={game.id} videogame={game} />
            ))
          ) : (
            <p>{isErrorBestGames}</p>
          )}
        </ul>
      )}
    </>
  )
}
