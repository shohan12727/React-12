import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {

    const newAsset = useContext(AssetContext)
    console.log(newAsset);
    

    return (
        <div>
            <h3>Special</h3>
            <h4>Asset: {asset}</h4>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;