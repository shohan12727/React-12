import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json')
.then(response => response.json())

const Categories = () => {
    const categoty = use(categoriesPromise);
    // console.log(categoty);
    
    return (
        <div>
            <h2 className='font-bold'>All Categories({categoty.length})</h2>
            <div className='grid grid-cols-1'>
                {
                    categoty.map(c => (
                        <NavLink
                        key={c.id}
                        className={`btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent`}
                        to={`/category/${c.id}`}
                        >{c.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;