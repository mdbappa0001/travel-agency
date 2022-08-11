import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../Firebase/Firebase.init';

const Users = () => {
    const [user] = useAuthState(auth)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/user')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }, [user])

    if (!user) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;