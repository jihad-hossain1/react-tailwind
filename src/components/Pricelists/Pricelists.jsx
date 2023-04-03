import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Pricelists = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('prices.json').then(res => res.json()).then(data =>{
            setPrices(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold bg-purple-500 py-2'> This from awesome priceLists</h2>
            <div className='grid md:grid-cols-3 gap-2 mx-5 lg:mx-64 my-3'>
                {
                    prices.map(price => <SingleCard price={price}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Pricelists;