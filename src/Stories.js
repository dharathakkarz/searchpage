import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Stories = () => {

    const { hits, nbPages, isLoading , removeNews } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )

    }




    return (
        <>
       
        <div className='stories-div'>
        
            {hits.map((curNews) => {
                const { title, author, objectID, url, num_comments } = curNews;
                return (
                    <>
                    <div className='card' key={objectID}>

                     <h2>{title}</h2>
                  
                    <p>
                        By <strong>{author}</strong> | <strong>{num_comments}</strong> comments
                   
                    </p>
                    <div className='card-button'>
                    <a href={url}target='_blank' >Read more</a>
                    <a href='#' onClick={()=>removeNews(objectID)}>Remove</a>
                    </div>
                    </div>
                    </>
                )

            })}

        </div>
        </>
    )
}

export default Stories
