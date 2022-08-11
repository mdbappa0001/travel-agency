import React, { useEffect, useState } from 'react';
import AvailableTour from './AvailableTour';
import OpenModal from './OpenModal';

const AvailableTours = () => {
    const [tours, setTours] = useState([]);
    const [confirm, setConfirm] = useState(null);

    useEffect(() => {
        fetch('tour.json')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])

    return (
        <div>
            <h2 className='text-xl lg:text-3xl text-secondary text-center font-bold lg:mt-8'>Available Tours  </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-24 ml-8 mr-8 mt-12'>
                {
                    tours.map(tour => <AvailableTour
                        key={tour._id}
                        tour={tour}
                        setConfirm={setConfirm}
                    ></AvailableTour>)
                }
            </div>
            {confirm && <OpenModal
                confirm={confirm}
                setConfirm={setConfirm}
            ></OpenModal>}
        </div>
    );
};

export default AvailableTours;