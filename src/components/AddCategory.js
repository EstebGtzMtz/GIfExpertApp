import React, { useState } from 'react';
import propTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [addCategoryInputValue, setaddCategoryInputValue] = useState('');

    const handleInputChange = (e) => {
        setaddCategoryInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(addCategoryInputValue.trim().length > 2){
            setCategories( categories => [addCategoryInputValue, ...categories]);
            setaddCategoryInputValue(''); 
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                value={addCategoryInputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

export default AddCategory;