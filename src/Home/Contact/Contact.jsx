import React from 'react';
import contactImg from '../../assets/logo & important picture/Banner/2148121930-removebg-preview.png'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-black to-slate-800 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-3 lg:gap-10">
                    <img src={contactImg} className="max-w-xs rounded-lg shadow-2xl mt-10 lg:mt-0" />
                    <div>
                        <h1 className="text-5xl font-bold">Contact with me!</h1>
                        <p className="py-6">Anytime if you need me, Don't feel shy to contact with me!</p>
                        <nav className="flex items-center justify-center gap-5">
                            <button className='btn btn-md btn-square outline outline-2 outline-blue-500 bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white'><Link to='' className='text-2xl'><FaFacebook /></Link></button>
                            <button className='btn btn-md btn-square outline outline-2 outline-green-400 bg-transparent text-green-400 hover:bg-green-500 hover:text-white'><Link to='' className='text-2xl'><FaWhatsapp /></Link></button>
                            <button className='btn btn-md btn-square outline outline-2 outline-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white'><Link to='' className='text-2xl'><FaYoutube /></Link></button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;