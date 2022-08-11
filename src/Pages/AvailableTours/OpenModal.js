import React from 'react';


const OpenModal = ({ confirm }) => {

    const { _id, img, cost } = confirm;
   



    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center lg:mb-3">Please Pay For : <img className='w-16 ml-48' src={img} alt="" /></h3>
                    <h3 className=" text-xl  text-center lg:mb-2">Id : <span className='text-blue-500 font-bold'>${_id}</span></h3>
                    <h3 className=" text-xl  text-center lg:mb-2">Price : <span className='text-blue-500 font-bold'>${cost}</span></h3>

                </div>
            </div>
        </div>
    );
};

export default OpenModal;