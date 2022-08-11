import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-2xl lg:text-2xl font-bold text-red-700 ml-6 mt-4'>My Profile</h2>
            <h3 className='ml-24 lg:ml-96 text-xl mt-4 lg:mt-12'>User Name : <span className='text-primary'>{user?.displayName}</span></h3>
            <p className='ml-24 lg:ml-96 text-xl'>Email : <span className='text-primary'>{user?.email}</span></p>
        </div>
    );
};

export default MyProfile;