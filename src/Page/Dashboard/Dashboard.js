import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
            <Outlet></Outlet>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

            <li><Link to='/dashboard'>Appoinment</Link></li>
            <li><Link to="/dashboard/myReview">Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;