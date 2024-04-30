import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext()

const getInitialDarkTheme = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkTheme = localStorage.getItem('dark-theme') === 'true'

  return storedDarkTheme || prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkTheme())
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    // const body = document.querySelector('body')
    // body.classList.toggle('dark-theme', newDarkTheme)
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('dark-theme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
