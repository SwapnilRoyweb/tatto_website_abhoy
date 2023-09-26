import React from 'react';
import background from '../../assets/BACKGROUND.png'
import img1 from '../../assets/logo & important picture/1dbbdf1a2147d08a4813cc0b9c07ce41-removebg-preview.png'
import img2 from '../../assets/logo & important picture/1dbbdf1a2147d08a4813cc0b9c07ce41.jpg'
import img3 from '../../assets/logo & important picture/img3.jpg'
import img4 from '../../assets/logo & important picture/img4.jpg'
import img5 from '../../assets/logo & important picture/img5.jpg'
import img6 from '../../assets/logo & important picture/img6.jpg'
import img7 from '../../assets/logo & important picture/img7.jpg'
import img8 from '../../assets/logo & important picture/img8.jpg'
import { GiSelfLove } from "react-icons/gi";

const Banner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-black to-slate-700'>
            <img src={background} className='min-h-screen w-screen' alt="" />
            <div className='flex flex-col md:flex-row gap-10 items-center justify-center absolute -bottom-8 w-full h-full'>
                <div className='mx-auto lg:ml-20 text-white w-80 md:w-96 lg:w-1/2'>
                    <h1 className='text-5xl font-bold text-white uppercase mb-5'>A TOUCH of INK</h1>
                    <p>Choosing a certified and skilled tattoo artist is essential to ensure your safety, receive a high-quality piece of body art and have a positive overall experience.</p>
                    <button className='btn btn-outline btn-error btn-wide mt-8'>Click me <GiSelfLove></GiSelfLove></button>
                </div>
                {/* <img src={img1} alt="" className='mr-5 lg:mr-20' /> */}
                <div className='mx-5 lg:mr-20 w-1/2'>
                    <div className="carousel rounded-box w-full">
                        <div className="carousel-item w-1/2">
                            <img src={img1} className="w-full bg-gradient-to-r from-black to-slate-400" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img2} className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img3} className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img4} className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img5} className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img6} className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src={img7} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;