import React from 'react';
import banner from "../Images/banner.png";

const Banner = () => {
    return (
        <>
            <div className="carousel w-full lg:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full h-full top-0 left-0 absolute opacity-70'></div>
                    <div className='w-full h-full flex flex-col absolute top-0 left-0'>
                        <div className='text-2xl md:text-4xl lg:text-5xl'>
                        <p className='mt-16 lg:mt-48 lg:mb-6 font-extrabold ml-16'>It's Time To </p>
                        <p className='mb-6 font-extrabold ml-16'> Explore The World</p>
                        </div>
                        <a href="#contact">
                            <button className='lg:mt-4 ml-16 p-3 bg-red-600 text-white font-bold hover:bg-lime-700 hover:text-white'>Plan Your Trip</button>
                        </a>
                    </div>
                    <img src={banner} className="w-full" alt='' />
                </div>
            </div>
        </>
    );
};

export default Banner;