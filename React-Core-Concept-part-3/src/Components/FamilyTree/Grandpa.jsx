import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <>
          
        <div className=''>
           <h3>Grandpa</h3>
           <section className='flex'>
             <Dad> </Dad>
            <Uncle></Uncle>
            <Aunt></Aunt>
           </section>
        </div>
        </>
       
    );
};

export default Grandpa;