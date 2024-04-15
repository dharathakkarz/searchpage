import React from 'react'
import { useGlobalContext } from './context'

const Page = () => {
  const {page,nbPages,getprevPage,getnextPage} = useGlobalContext()
  return (
    <>
    <div className='pagination-btn'>
      <button onClick={()=> getprevPage()}>Previous</button>
      <p>
        {page+1} of {nbPages}
      </p>
      <button onClick={()=> getnextPage()}>Next</button>
    
    </div>
    </>
  )
}

export default Page
