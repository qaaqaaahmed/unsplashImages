import React, { useState } from 'react'
import { useGlobalContext } from './context'

function SearchForm() {
  //   const [inputValue, setInputValue] = useState('')
  const { setSearchTerm } = useGlobalContext()
  const handleFormSubmission = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    console.log(searchValue)
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="cat"
          className="form-input search-input"
          name="search"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  )
}

export default SearchForm
