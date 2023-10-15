import React from 'react';
import img1 from '../../assets/Client_Works/FB_IMG_1695311149219.jpg'
import img2 from '../../assets/Client_Works/FB_IMG_1695311158272.jpg'
import img3 from '../../assets/Client_Works/FB_IMG_1695311169563.jpg'
import img4 from '../../assets/Client_Works/FB_IMG_1695311297689.jpg'
import img5 from '../../assets/Client_Works/FB_IMG_1695311308700.jpg'
import img6 from '../../assets/Client_Works/FB_IMG_1695311319794.jpg'
import img7 from '../../assets/Client_Works/FB_IMG_1695311326752.jpg'
import img8 from '../../assets/Client_Works/FB_IMG_1695311334537.jpg'
import img9 from '../../assets/Client_Works/FB_IMG_1695311343461.jpg'
import img10 from '../../assets/Client_Works/FB_IMG_1695311909237.jpg'
import img11 from '../../assets/Client_Works/FB_IMG_1695311920562.jpg'
import img12 from '../../assets/Client_Works/FB_IMG_1695311927890.jpg'
import img13 from '../../assets/Client_Works/FB_IMG_1695311936391.jpg'
import img14 from '../../assets/Client_Works/FB_IMG_1695311946008.jpg'
import img15 from '../../assets/Client_Works/FB_IMG_1695311963218.jpg'
import img16 from '../../assets/Client_Works/FB_IMG_1695311973329.jpg'
import img17 from '../../assets/Client_Works/FB_IMG_1695311981366.jpg'
import img18 from '../../assets/Client_Works/FB_IMG_1695311988723.jpg'
import img19 from '../../assets/Client_Works/FB_IMG_1695311997062.jpg'
import img20 from '../../assets/Client_Works/FB_IMG_1695312006453.jpg'
import img21 from '../../assets/Client_Works/FB_IMG_1695312385439.jpg'
import img22 from '../../assets/Client_Works/IMG_20230621_173606631.jpg'
import img23 from '../../assets/Client_Works/IMG_20230906_000102078.jpg'
import img24 from '../../assets/Client_Works/IMG_20230621_194948059.jpg'
import img25 from '../../assets/Client_Works/f461dac4fbfac4ec6d6c522a667d6c1b.jpg'
import { FcLike } from "react-icons/fc";


const Works = () => {
    return (
        <div className='bg-gradient-to-r from-black to-slate-600 min-h-screen w-full flex flex-col justify-center'>
            <div className='mx-20'>
                <h1 className='text-white text-center mt-24 bg-gradient-to-r from-slate-500 to-blue-800 py-3 rounded-2xl text-3xl uppercase font-bold border border-b-2 border-x-2 border-t-0 shadow-inner shadow-white'>My Works</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row flex-wrap gap-10 my-10'>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Snake</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img1} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img2} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">OM with Peacock Feather</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img3} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Sign with Letters</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img4} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">OM with Shiva</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img5} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Letter Words</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img6} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Foreign Words with meaning</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img7} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Foot Eye</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img8} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Shiva</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img9} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Ganesha</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img10} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Sign in Hand</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img11} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Flower sign in Hand</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img12} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Name in Finger</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img13} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Shiva Word</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img14} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Sign in Side hand</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img15} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Couple Tattoo</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img16} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Name with Sign</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img17} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident 2</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img18} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Lakshmi</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img19} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Tik-Tak-Toe</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img20} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Peacock Feather in Back</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img21} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident 3</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img22} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident 4</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img23} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident 5</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img24} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                <div className="rounded-2xl w-96 bg-gradient-to-l from-blue-500 to-slate-800 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <div className="card-body text-white flex flex-row justify-between">
                        <h2 className="card-title">Trident Eye</h2>
                        <button className='btn btn-circle'><FcLike className='text-xl'/></button>
                    </div>
                    <figure><img src={img25} alt="Shoes" className='w-full h-72 rounded-2xl'/></figure>
                </div>
                
            </div>
        </div>
    );
};

export default Works;