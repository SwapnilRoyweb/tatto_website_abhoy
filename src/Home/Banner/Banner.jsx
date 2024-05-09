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
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import './Style.css'
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

const Banner = () => {
    // Icon
    defineElement(lottie.loadAnimation);

    // const images = [
    //     {
    //         original: "https://i.ibb.co/4dQkmCc/1dbbdf1a2147d08a4813cc0b9c07ce41-removebg-preview.png"
    //     },
    //     {
    //         original: "https://i.ibb.co/3vzRhtP/img7.jpg"
    //     },
    //     {
    //         original: {img3}
    //     },
    //     {
    //         original: {img4}
    //     },
    //     {
    //         original: {img5}
    //     },
    //     {
    //         original: {img6}
    //     },
    //     {
    //         original: {img7}
    //     },
    //     {
    //         original: {img8}
    //     }
    // ];

    return (
        <div className='min-h-screen bg-gradient-to-r from-black to-slate-700'>
            <img src={background} className='min-h-screen w-screen' alt="" />
            <div className='flex flex-col md:flex-row gap-5 lg:gap-8 items-center justify-center absolute -bottom-8 w-full h-full'>
                <div className='mx-auto lg:ml-20 text-white w-80 md:w-96 lg:w-1/2 text-center lg:text-left lg:mt-0'>
                    <h1 className='text-3xl lg:text-5xl text-center lg:text-left font-bold text-white uppercase mb-2 md:mb-3'>A TOUCH of INK</h1>
                    <p className='mb-2 md:mb-3 lg:mb-5 text-sm'>Choosing a certified and skilled tattoo artist is essential to ensure your safety, receive a high-quality piece of body art and have a positive overall experience.</p>
                    <p className='mb-3 lg:mb-5 text-sm md:text-base lg:text-lg'>This is <span className='font-bold'>Abhoy Das Antu</span>. A Tattoo 3 Certified Artist. Tattoo 3 is an indian advanced tattoo training center. I have learned advanced necessary techniques to perform this art.</p>
                    <button className='mt-2 btn btn-outline btn-error btn-wide transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Click me <GiSelfLove></GiSelfLove></button>
                </div>
                {/* <img src={img1} alt="" className='mr-5 lg:mr-20' /> */}
                <div className='lg:mr-20 w-1/2'>

                    {/* <ImageGallery items={images} />; */}

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

                    <div className='mt-2 md:mt-3'>
                        <p className='text-white text-center flex flex-row w-full items-center justify-center gap-3'>
                            <lord-icon
                                src="https://cdn.lordicon.com/axacjdbs.json"
                                trigger="hover"
                            ></lord-icon>
                            swipe right left or click right left
                            <lord-icon
                                src="https://cdn.lordicon.com/axacjdbs.json"
                                trigger="hover"
                            ></lord-icon></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;