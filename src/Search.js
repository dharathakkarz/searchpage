import React from 'react'
import {useGlobalContext} from './context'

const Search = () => {
  const {query,searchNews} = useGlobalContext()
  return (
    <>
  
    <h1>News App</h1>
    <form onSubmit={(e)=> e.preventDefault()}>
      <div>
        <input type='text' placeholder='Search news' value={query} onChange={(e)=> searchNews(e.target.value)} />
      </div>
    </form>
    </>
  )
}

export default Search
