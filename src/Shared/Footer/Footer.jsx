import React from 'react';
import logo from '../../assets/logo & important picture/A TOUCH OF INK LOGO.png'

const Footer = () => {
    return (
        <footer className="footer mx-auto w-11/12 px-8 py-5 lg:py-3 rounded-xl bg-gradient-to-r from-black to-slate-800 text-neutral-content flex flex-row items-center justify-around my-8">
            <aside className="flex items-center">
                <img src={logo} alt="" className='h-28' />
                <p className='text-white text-2xl font-bold'>A Touch of INK</p>
            </aside>
            <div className='hidden sm:flex'>
                <p className='text-center'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;