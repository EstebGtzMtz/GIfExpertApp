import React, { useState } from 'react';
import AddCategory from '../components/AddCategory'
import GifGrid from '../components/GifGrid/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Master Chief'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <ul>
                {
                    categories.map(el => (
                        <GifGrid key={el} category={el} />
                    ))
                }
            </ul>
        </>
    )
}

export default GifExpertApp;
