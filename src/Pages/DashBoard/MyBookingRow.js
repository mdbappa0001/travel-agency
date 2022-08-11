import React, { useState } from 'react';
import { toast } from 'react-toastify';


const MyBookingRow = ({ booking, index ,setBookings}) => {
    const [state, setState] = useState(true);
    const {  user, location, phone } = booking;
    const toggle = () => {
        setState(!state)
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast(`successfully deleted`)
            })
        }
        
      
            
    }

   

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{location}</td>
            <td>{phone}</td>
            <td><span
                onClick={toggle}>
                {state ? <p className='bg-red-700 w-28 py-1 text-center rounded-full text-white'>Confirm Please</p> : <p className='bg-yellow-500 w-24 text-center rounded-full  py-1'>Confirmed</p>}
            </span>
            </td>
            <td><button 
            onClick={() => handleDelete(booking._id)}
            className='btn btn-xs btn-primary'>Delete</button></td>
        </tr>
    );
};

export default MyBookingRow;