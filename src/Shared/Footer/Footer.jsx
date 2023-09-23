import React from 'react';
import logo from '../../assets/logo & important picture/A TOUCH OF INK LOGO.png'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mx-auto w-11/12 px-8 py-3 rounded-xl bg-gradient-to-r from-black to-slate-800 text-neutral-content flex items-center justify-evenly my-8">
            <aside className="flex items-center">
                <img src={logo} alt="" className='h-28' />
                <p className='text-white text-2xl font-bold'>A Touch of INK</p>
            </aside>
            <div className='hidden md:flex'>
                <p className='text-center'>Copyright © 2023 - All right reserved</p>
            </div>
            <nav className="flex items-center gap-5">
                <button className='btn btn-md btn-square outline outline-2 outline-blue-500 bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white'><Link to='' className='text-2xl'><FaFacebook /></Link></button>
                <button className='btn btn-md btn-square outline outline-2 outline-green-400 bg-transparent text-green-400 hover:bg-green-500 hover:text-white'><Link to='' className='text-2xl'><FaWhatsapp /></Link></button>
                <button className='btn btn-md btn-square outline outline-2 outline-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white'><Link to='' className='text-2xl'><FaYoutube /></Link></button>
            </nav>
        </footer>
    );
};

export default Footer;