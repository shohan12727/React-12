import React, { use } from 'react';

const categoriesPromise = fetch('/categories.json')
.then(response => response.json())

const Categories = () => {
    const categoty = use(categoriesPromise);
    console.log(categoty);
    
    return (
        <div>
            <h2 className='font-bold'>All Categories({categoty.length})</h2>
        </div>
    );
};

export default Categories;