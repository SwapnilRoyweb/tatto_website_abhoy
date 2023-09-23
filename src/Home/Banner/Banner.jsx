import React from 'react';
import background from '../../assets/BACKGROUND.png'

const Banner = () => {
    return (
        <div>
            <img src={background} className='max-h-screen w-screen' alt="" />
        </div>
    );
};

export default Banner;