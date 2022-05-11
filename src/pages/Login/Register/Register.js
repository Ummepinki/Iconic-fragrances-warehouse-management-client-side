import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=" " placeholder='your name' />
                <input type="email" name="email" id=" " placeholder='Email address' required />
                <input type="password" name="password" id=" " placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Are you new? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}> please login</Link></p>
        </div>
    );
};

export default Register;