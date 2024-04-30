import React from 'react'
import { useGlobalContext } from './context'
import { CiLight } from 'react-icons/ci'
import { MdOutlineNightlightRound } from 'react-icons/md'

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  console.log(isDarkTheme, 'this is is dark theme')
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <CiLight /> : <MdOutlineNightlightRound />}
      </button>
    </section>
  )
}

export default ThemeToggle
