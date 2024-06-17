import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo & important picture/A TOUCH OF INK LOGO.png'
import { FaHome } from 'react-icons/fa';
import { SiAlchemy } from "react-icons/si";
import { MdWorkspacePremium, MdContactMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";


const Navbar = () => {

    const navItems = <>
        <li><Link to='/' className='flex items-center text-base'><FaHome />Home</Link></li>
        <li><Link to='/designs' className='flex items-center'><SiAlchemy />Designs</Link></li>
        <li><Link to='/myWorks' className='flex items-center'><MdWorkspacePremium />My Works</Link></li>
        <li><Link to='/about' className='flex items-center'><RiContactsFill />About Me</Link></li>
        <li><Link to='/contact' className='flex items-center'><MdContactMail />Contact</Link></li>
    </>

    return (
        <div className="navbar fixed bg-black bg-opacity-30 text-white">
            <div className="navbar-start">
                <Link to='/'>
                    <div className='flex flex-col items-center justify-center ml-16'>
                        <img src={logo} alt="" className='h-12' />
                        <p className="font-bold uppercase text-xs">A Touch of INK</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden mr-16">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-5 z-[1] p-1 shadow bg-black bg-opacity-30 rounded-box w-32 py-5">
                        {navItems}
                    </ul>
                </div>
                {/* <button className='btn btn-disabled mr-5'>Subscribe</button> */}
            </div>
        </div>
    );
};

export default Navbar;