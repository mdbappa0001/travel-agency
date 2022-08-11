import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../Firebase/Firebase.init';
import MyBookingRow from './MyBookingRow';

const MyBooking = () => {
    const [user] = useAuthState(auth)
    const [bookings, setBookings] = useState([])
  

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?user=${user.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user])

    if (!user) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-blue ml-6 lg:text-xl mt-4 mb-4'>Hello, <span className='text-blue-800'>{user?.displayName}</span>. You have <span className='text-blue-800'>{bookings?.length}</span> bookings.</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map((booking, index) => <MyBookingRow
                                key={booking._id}
                                index={index}
                                booking={booking}
                                setBookings={setBookings}
                            ></MyBookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;