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
       <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/home'>Home</Link></li>
      <li><Link to="/appoinment">Appoinment</Link></li>
      {
        user && <li><Link to="/dashboard">Dashboard</Link></li>
      }
      <li><Link to="/about">About</Link></li>
      <li>{user ? <Link onClick={logOut}>SignOut</Link>  : <Link to="/login">Login</Link>}</li>
      </ul>
    </div>
    <Link class="btn btn-ghost normal-case text-xl" to="/home">DentaL Care</Link>
  </div>
  <div className='navbar-end'>
  <label  for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
</div>
  <div class="lg:navbar-end">
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
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