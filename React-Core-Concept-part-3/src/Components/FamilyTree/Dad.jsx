import React from 'react';
import Myself from './Myself';
import Borther from './Borther';
import Sister from './Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Borther></Borther>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;