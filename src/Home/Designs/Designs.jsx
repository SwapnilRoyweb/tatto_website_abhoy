import React from 'react';
import { AiFillLike } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import design1 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.04 PM.jpeg'
import design2 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.05 PM.jpeg'
import design3 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.06 PM.jpeg'
import design4 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.07 PM.jpeg'
import design5 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.08 PM.jpeg'
import design6 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.10 PM.jpeg'
import design7 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.11 PM.jpeg'
import design8 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.12 PM.jpeg'
import design9 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.13 PM.jpeg'
import design10 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.16 PM.jpeg'
import design11 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.17 PM.jpeg'
import design12 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.17 PM (1).jpeg'
import design13 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.18 PM.jpeg'
import design14 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.19 PM.jpeg'
import design15 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.19 PM (1).jpeg'
import design16 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.19 PM (2).jpeg'
import design17 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.20 PM.jpeg'
import design18 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.20 PM (1).jpeg'
import design19 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.20 PM (2).jpeg'
import design20 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.24 PM.jpeg'
import design21 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.24 PM (1).jpeg'
import design22 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.25 PM.jpeg'
import design23 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.25 PM (1).jpeg'
import design24 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.25 PM (2).jpeg'
import design25 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.25 PM (3).jpeg'
import design26 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.25 PM (4).jpeg'
import design27 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.26 PM.jpeg'
import design28 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.26 PM (1).jpeg'
import design29 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.27 PM.jpeg'
import design30 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.27 PM (1).jpeg'
import design31 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.27 PM (2).jpeg'
import design32 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.28 PM.jpeg'
import design33 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.28 PM (1).jpeg'
import design34 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.29 PM.jpeg'
import design35 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.30 PM.jpeg'
import design36 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.32 PM.jpeg'
import design37 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.32 PM (1).jpeg'
import design38 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.32 PM (2).jpeg'
import design39 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.33 PM.jpeg'
import design40 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.33 PM (1).jpeg'
import design41 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.33 PM (2).jpeg'
import design42 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.34 PM.jpeg'
import design43 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.35 PM.jpeg'
import design44 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.35 PM (1).jpeg'
import design45 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.36 PM.jpeg'
import design46 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.40 PM.jpeg'
import design47 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.41 PM.jpeg'
import design48 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.41 PM (1).jpeg'
import design49 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.41 PM (2).jpeg'
import design50 from '../../assets/Design Sample/WhatsApp Image 2023-11-21 at 8.03.42 PM.jpeg'

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
                <Tilt>
                    <div className="card w-96 h-60 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        <figure><img src={design5} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design6} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design7} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design8} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design9} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design10} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design11} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design12} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design13} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design14} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design15} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design16} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design17} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design18} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design19} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design20} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design21} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design22} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design23} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design24} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design25} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design26} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design27} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design28} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design29} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design30} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design31} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design33} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design34} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design35} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design36} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design37} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design38} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design39} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design40} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design41} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design42} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design43} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design44} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design45} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design46} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design47} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design48} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design49} alt="Shoes" className='w-full h-full' /></figure>
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
                        <figure><img src={design50} alt="Shoes" className='w-full h-full' /></figure>
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