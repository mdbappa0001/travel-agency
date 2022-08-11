import React from 'react';
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service3 from "../Images/service3.png";
import service4 from "../Images/service4.png";

const ChooseUs = () => {
    return (
       
        <div className='  pt-16'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5'>

            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-center'> 
                    <img className='w-32' src={service1} alt="" />
                     </div>
                    <p className='text-center font-bold text-xl'>Choose Destination</p>
                </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                    <img className='w-32' src={service2} alt="" />
                    </div>
                    <p className='text-center font-bold text-xl'>Explore The Place</p>
                </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                    <img className='w-32' src={service3} alt="" />
                         </div>
                    <p className='text-center font-bold text-xl'>Start Your Journey</p>
                </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                    <img className='w-32' src={service4} alt="" />
                    </div>
                    <p className='text-center font-bold text-xl'>Let's Enjoy</p>
                </div>
            </div>

        </div>

    </div>
    );
};

export default ChooseUs;