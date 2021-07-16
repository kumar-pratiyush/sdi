import React from 'react';
import successful from './successful.png';
import { Link } from "react-router-dom";

const Registered = () => {

    
    return(
        <div className="registered">
            <img src={successful} alt="successful" className="success-img"></img>
            <h1>Congratulations!</h1>
            <h2>You have been Registered Successfully!</h2>
            <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                <h3 className="link-back"><u>Sign In</u></h3>
            </Link>
        </div>
    );
};

export default Registered;