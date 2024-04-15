
import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Stories = () => {
    const { hits, nbPages, isLoading, removeNews } = useGlobalContext();

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className='stories-div'>
            {hits.map((curNews) => {
                const { title, author, objectID, url, num_comments } = curNews;
                return <StoryCard key={objectID} {...{ title, author, objectID, url, num_comments, removeNews }} />;
            })}
        </div>
    );
}

const StoryCard = ({ title, author, objectID, url, num_comments, removeNews }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handlePress = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000); 
    };

    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>
                By <strong>{author}</strong> | <strong>{num_comments}</strong> comments
            </p>
            <div className='card-button'>
                <a href={url} target='_blank' rel="noopener noreferrer">Read more</a>
                <a href='#' onClick={() => removeNews(objectID)}>Remove</a>
            </div>
            <div>
                <button
                    className="big"
                    onClick={handlePress}
                >
                    🍕
                </button>
                {showMessage && <p style={{ color:'red' }} > Thanks for your like!! Pizza is the best</p>}
            </div>
        </div>
    );
}

export default Stories;
