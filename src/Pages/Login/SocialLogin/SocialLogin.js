import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userr, loadingg, errorr] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || errorr) {
        errorElement = <p className='text-danger'>Error: {error?.message} {errorr?.message}</p>
    }

    if (user || userr) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt=""></img>
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-danger w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={facebook} alt=""></img>
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button 
                    onClick={() => signInWithGithub()}
                    className='btn btn-danger w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt=""></img>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;