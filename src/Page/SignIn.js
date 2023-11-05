import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
        
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    const [updateProfile, updating, UpdataError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;
    // let passwordError;
    const navigate = useNavigate();
    if( loading || Gloading || updating){
        return <Loading />
    }
    if(error || Gerror || UpdataError){
        signInError = <p className='text-error'>{error?.message || Gerror?.message}</p>
    }
    
   
    const handleOnSubmit = async (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
         await   createUserWithEmailAndPassword(email,password);
          await  updateProfile({displayName:name});
         
           navigate('/appoinment');
    }
      
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center font-bold text-3xl ">Sign In</h2>
    <form onSubmit={handleOnSubmit} className='grid grid-cols-1 gap-3 mt-4'>
    <input name='name' type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" required/>
    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required/>
    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required />
    {signInError}
    {/* {passwordError} */}
    <button type='submit' className="btn mt-3 btn-neutral w-full max-w-xs">Sign In</button>
    </form>
    <p>Already have an account? <Link to="/login" className='text-accent'>Sign In</Link></p>

    <div className="divider">OR</div>
    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>


  </div>
</div>
        </div>
    );
};

export default SignIn;