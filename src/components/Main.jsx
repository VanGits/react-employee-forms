import React from 'react';
import Caregiver from './Caregiver';
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className='Main'>
            <h1>in Main</h1>
            <Link to="/caregiver-forms/0">
                <button>caregiver</button>
            </Link>
            <Link to="/client-forms">
                <button>client</button>
            </Link>
            
        </div>
    );
}

export default Main;