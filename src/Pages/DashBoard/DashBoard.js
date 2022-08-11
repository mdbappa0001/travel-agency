import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary lg:ml-72 mt-4 font-bold'>Welcome To Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-300 font-bold">
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-success rounded mt-4 hover:text-white hover:bg-red mb-5'><Link to="/dashboard">My Bookings</Link></li>
                    <li className='bg-success rounded hover:text-white hover:bg-red '><Link to="/dashboard/profile">My Profile</Link></li>
                    <li className='bg-success mt-4 rounded hover:text-white hover:bg-red '><Link to="/dashboard/users">All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;