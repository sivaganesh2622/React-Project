import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config';
import './signup.css'; 

const Signup = () => {
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');

    const navigate = useNavigate();

    const signupfunc = () => {
        createUserWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("registered");
                navigate('/');
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container SignOut-container">
            <h1 className='text-center  text-info'>Signup</h1>
            <input
                type="email"
                className='form-control'
                placeholder="Email"
                onChange={(e) => setuser(e.target.value)}
            />
            <input
                type="password"
                className='form-control'
                placeholder="Password"
                onChange={(e) => setpass(e.target.value)}
            />
            <button className="btn  btn-outline-primary" onClick={signupfunc}>Signup</button>
            <p className="text-center text-white bg-dark" >
                 If you already have an account, login here: <Link to={'/'}>Login</Link></p>
                 
        </div>
    );
};

export default Signup;
