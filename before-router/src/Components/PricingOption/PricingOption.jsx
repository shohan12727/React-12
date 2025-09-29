import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOption = ({pricingPromise}) => {


    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    



    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 container'>
            {/* {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            } */}
          {
            pricingData.map((element, index) => <DaisyCard key={index} element={element}></DaisyCard>)
          }

        </div>
    );
};

export default PricingOption;