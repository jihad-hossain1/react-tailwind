import React from 'react';
import Features from './Features';

const SingleCard = (props) => {
    // console.log(props.price);
    const {annual, features, monthly, type} = props.price;
    return (
        <div className='p-2 bg-purple-200 rounded flex flex-col'>
            <h2 className='text-center'> 
            <span className='text-3xl font-extrabold'>{monthly}</span>
            <span>/mon</span>
            </h2>
            <h2 className='text-purple-700 font-semibold text-center'>{type}</h2>
            <h2 className='text-purple-700 font-semibold underline'>Feature:</h2>
            <p> {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                } </p>
            
                <button className='w-full py-2 rounded hover:bg-purple-800 bg-purple-600 text-white mt-auto'>Book Now</button>
            
        </div>
    );
};

export default SingleCard;