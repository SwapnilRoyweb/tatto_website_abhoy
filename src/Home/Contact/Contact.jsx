import React from 'react';
import contactImg from '../../assets/logo & important picture/Banner/2148121930-removebg-preview.png'
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-black to-slate-800 text-white pb-8 lg:pb-0">
                <div className="hero-content flex-col lg:flex-row-reverse gap-3 lg:gap-10">
                    <img src={contactImg} className="max-w-xs rounded-lg shadow-2xl mt-14 lg:mt-0" />
                    <div>
                        <div className='my-5'>
                            <h1 className="text-5xl font-bold mt-5 text-center">Contact with me!</h1>
                            <p className="py-3 text-center">Anytime if you need me, Don't feel shy to contact with me!</p>
                        </div>
                        <div className="card shrink-0 glass w-full max-w-sm shadow-2xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] px-3">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Your Message</span>
                                    </label>
                                    <input type="text" placeholder="Your Message to Abhoy" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="xyz@gmail.com" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-glass btn-outline">Send</button>
                                </div>
                            </form>
                        </div>

                        <nav className="flex items-center justify-center gap-5 mt-8">
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