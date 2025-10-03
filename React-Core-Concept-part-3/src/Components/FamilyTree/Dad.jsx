import React from 'react';
import Myself from './Myself';
import Borther from './Borther';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself></Myself>
                <Borther></Borther>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;