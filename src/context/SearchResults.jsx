import { createContext, useContext, useState } from 'react'

const SearchResultsContext = createContext()

export function useSearchResults () {
  return useContext(SearchResultsContext)
}

export function SearchResultsProvider ({ children }) {
  const [searchResults, setSearchResults] = useState(
    // eslint-disable-next-line no-undef
    JSON.parse(localStorage.getItem('searchResults')) || []
  )

  const updateSearchResults = (newResults) => {
    setSearchResults(newResults)
    // eslint-disable-next-line no-undef
    localStorage.setItem('searchResults', JSON.stringify(newResults))
  }

  return (
    <SearchResultsContext.Provider
      value={{ searchResults, updateSearchResults }}
    >
      {children}
    </SearchResultsContext.Provider>
  )
}
