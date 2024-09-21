import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../config';
import { Link, useNavigate } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    const navigate = useNavigate();

    const signoutfunc = () => {
        signOut(auth).then(() => {
            navigate('/'); // Navigate back to the home page after signing out
        }).catch((error) => {
            console.error("Sign out error", error);
        });
    };

    return (
        <div className="container">
            <div className="header">
                <button className="btn signout-button" onClick={signoutfunc}>
                    <i className="fas fa-sign-out-alt"></i> Sign Out
                </button>
            </div>
            <h1 className="my-4 text-center text-white bg-dark">REACT PROJECT</h1>

            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm bg-light">
                        <div className="card-body">
                            <h5 className="card-title text-success">Weather App</h5>
                            <p className="card-text">Get real-time weather updates and forecasts.</p>
                            <a href="https://weather-self-chi.vercel.app/" className="btn btn-success">Go to Weather App</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm bg-light">
                        <div className="card-body">
                            <h5 className="card-title text-warning">Todo App</h5>
                            <p className="card-text">Manage your daily tasks and stay organized.</p>
                            <a href="https://to-do-navy-tau.vercel.app/" className="btn btn-warning">Go to Todo App</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
