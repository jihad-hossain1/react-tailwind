import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = (props) => {
    // console.log(props.feature);
    return (
        <div className='flex items-center'>
           <CheckCircleIcon class="h-5 w-5 text-purple-400" />

            <span className='pl-2'>{props.feature}</span>
        </div>
    );
};

export default Features;