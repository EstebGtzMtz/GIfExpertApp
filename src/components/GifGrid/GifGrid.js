import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';
import './style.css';

const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <div>
        <h3> {category} </h3>
            {loading && 'Cargando.....'}
            <div className="images-container">
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
        )
}

export default GifGrid;