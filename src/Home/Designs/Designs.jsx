import React from 'react';
import { AiFillLike } from "react-icons/ai";
import design1 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.04 PM.jpeg'

const Designs = () => {
    return (
        <div className='bg-gradient-to-r from-black to-slate-600 min-h-screen w-full flex flex-col justify-center'>
            <div className='mx-20'>
                <h1 className='text-white text-center bg-gradient-to-r from-slate-500 to-blue-800 py-3 rounded-2xl text-3xl uppercase font-bold border border-b-2 border-x-2 border-t-0 shadow-inner shadow-white'>My Designs</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row flex-wrap gap-10 my-10'>
                <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img src={design1} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name!</h2>
                        <div className="card-actions h-full items-end justify-end">
                            <button className="btn btn-outline btn-circle text-2xl"><AiFillLike/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designs;