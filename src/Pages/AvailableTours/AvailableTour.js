import React from 'react';

const AvailableTour = ({tour,setConfirm}) => {

const {img, cost, location} = tour;

    return (
        <div className="card lg:max-w-lg shadow-xl hover:bg-blue ">
        <div className="card-body">
            <img className='w-40 lg:w-44 lg:ml-24 ml-16' src={img} alt="" />
            <h2 className="text-xl font-bold text-center mt-4">Location : <span className='text-secondary'>{location}</span></h2>
            <h2 className="text-xl font-bold text-center">Cost : <span className='text-red-700'>${cost}</span></h2>
            <div className='card-actions justify-center'>
            <label
                        onClick={() => setConfirm(tour)}
                        for="booking-modal"
                        className="btn btn-sm btn-primary lg:mt-4 w-32 hover:btn-success">Confirm Now
                    </label>
            </div>
        </div>
    </div>
    );
};

export default AvailableTour;