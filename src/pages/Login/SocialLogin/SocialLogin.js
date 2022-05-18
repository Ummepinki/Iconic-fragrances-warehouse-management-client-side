import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const query = new URLSearchParams(useLocation().search);


    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error:{error.message}</p>
        </div>
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {

        console.log(query.get('id'));
        const path = query.get('id') ? `/item/${query.get('id')}` : '/home';
        navigate(path);

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50'> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;
