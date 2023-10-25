import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth  from './../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
 let signInError;

const location = useLocation();
const navigate = useNavigate();
let from = location.state?.from?.pathname || "/";

if( loading || Gloading){
    return <Loading />
}
if(error || Gerror){
    signInError = <p className='text-error'>{error?.message || Gerror?.message}</p>
}
if(user || Guser){
navigate(from, {replace: true});
}

// const navigate = useNavigate();
const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password);
}
    return (
        <div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center font-bold text-3xl ">Login</h2>
    <form onSubmit={handleOnSubmit} className='grid grid-cols-1 gap-3 mt-4'>
    <input name='email' type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" required/>
    <input name='password' type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required />
    {signInError}
    <button type='submit' class="btn mt-3 btn-neutral w-full max-w-xs">Login</button>
    </form>
    <p>New to Dental Clinic?  <Link to="/signin" className='text-accent'>Create account</Link></p>

    <div class="divider">OR</div>
    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with google</button>


  </div>
</div>
        </div>
    );
};

export default Login;