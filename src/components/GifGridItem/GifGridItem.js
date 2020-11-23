import React from 'react';
import './style.css';

const GifGridItem = ({ title, url }) => {

    return (
        <div className='card-container'>
            <img src={url} alt='from giphy API' />
            <div className='title-card'>
                <h4> {title} </h4>
            </div>
        </div>
    )
}

export default GifGridItem;