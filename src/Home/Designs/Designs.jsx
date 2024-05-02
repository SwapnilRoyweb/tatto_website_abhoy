import React from 'react';
import { AiFillLike } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import design1 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.04 PM.jpeg'
import design2 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.05 PM.jpeg'
import design3 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.06 PM.jpeg'
import design4 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.07 PM.jpeg'

const Designs = () => {
    return (
        <div className='bg-gradient-to-r from-black to-slate-600 min-h-screen w-full flex flex-col justify-center'>
            <div className='mx-20'>
                <h1 className='text-white text-center bg-gradient-to-r from-slate-500 to-blue-800 py-3 rounded-2xl text-3xl uppercase font-bold border border-b-2 border-x-2 border-t-0 shadow-inner shadow-white mt-24'>My Designs</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row flex-wrap gap-10 my-10'>
                <Tilt>
                    <div className="card w-96 h-60 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        <figure><img src={design1} alt="Shoes" className='w-full h-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name!</h2>
                            <div className="card-actions h-full items-end justify-end">
                                <button className="btn btn-outline btn-circle text-2xl"><AiFillLike /></button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="card w-96 h-60 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        <figure><img src={design2} alt="Shoes" className='w-full h-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name!</h2>
                            <div className="card-actions h-full items-end justify-end">
                                <button className="btn btn-outline btn-circle text-2xl"><AiFillLike /></button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="card w-96 h-60 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        <figure><img src={design3} alt="Shoes" className='w-full h-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name!</h2>
                            <div className="card-actions h-full items-end justify-end">
                                <button className="btn btn-outline btn-circle text-2xl"><AiFillLike /></button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="card w-96 h-60 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        <figure><img src={design4} alt="Shoes" className='w-full h-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name!</h2>
                            <div className="card-actions h-full items-end justify-end">
                                <button className="btn btn-outline btn-circle text-2xl"><AiFillLike /></button>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Designs;