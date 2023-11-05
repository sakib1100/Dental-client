import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
            <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

            <li><Link to='/dashboard'>Appoinment</Link></li>
            <li><Link to="/dashboard/myReview">Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;