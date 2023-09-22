import React from 'react';
import logo from '../../assets/logo & important picture/A TOUCH OF INK LOGO.png'

const Navbar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li><a>My Works</a></li>
        <li><a>My Designs</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        {navItems}
                    </ul>
                </div>
                <div className='flex flex-col items-center justify-center ml-5 lg:ml-10'>
                    <img src={logo} alt="" className='h-12' />
                    <a className="font-bold text-xs">A Touch of INK</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;