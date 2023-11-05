import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
 signOut(auth);
  }
    return (
        <div>
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/home'>Home</Link></li>
      <li><Link to="/appoinment">Appoinment</Link></li>
      {
        user && <li><Link to="/dashboard">Dashboard</Link></li>
      }
      <li><Link to="/about">About</Link></li>
      <li>{user ? <Link onClick={logOut}>SignOut</Link>  : <Link to="/login">Login</Link>}</li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to="/home">DentaL Care</Link>
  </div>
  <div className='navbar-end'>
  <label  htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
</div>
  <div className="lg:navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/home'>Home</Link></li>
      <li><Link to="/appoinment">Appoinment</Link></li>
      {
        user && <li><Link to="/dashboard">Dashboard</Link></li>
      }
      <li><Link to="/about">About</Link></li>
      <li>{user ? <Link onClick={logOut}>SignOut</Link>  : <Link to="/login">Login</Link>}</li>
    </ul>
  </div>
  </div>

</div>     


        </div>
    );
};

export default Navbar;