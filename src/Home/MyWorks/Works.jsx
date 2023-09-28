import React from 'react';

const Works = () => {
    return (
        <div className='bg-gradient-to-r from-black to-slate-600 min-h-screen w-full flex flex-col items-center justify-center'>
            <div className=''>
                <h1 className='text-white text-center mt-24 lg:mt-0 bg-gradient-to-r from-slate-500 to-blue-800 p-5 rounded-2xl text-3xl uppercase'>My Works</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:flex-row flex-wrap gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl mt-20">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-0 md:mt-20">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-0 md:mt-20">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Works;