import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../config';
import './login.css';

const Login = () => {
    const [user, setuser] = useState('');
    const [pass, setpass] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("logged in");
                navigate('/landing');
            } else {
                console.log("failed");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const loginfunc = () => {
        signInWithEmailAndPassword(auth, user, pass)
            .then(() => {
                console.log("logged in");
                navigate('/landing');
            })
            .catch(() => console.log("failed to login"));
    };

    return (
        <div className="container login-container">
            <h1 className="text-center text-info">Login</h1>
            <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setuser(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setpass(e.target.value)}
            />
            <button className="btn  btn-outline-primary" onClick={loginfunc}>Login</button>
            <p className="text-center text-white bg-dark">
                If you don't have an account, sign up here: <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
