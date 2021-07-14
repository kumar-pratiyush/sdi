import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="login">
            <div className="login-form">
            <form>
                    <h1 className="login-h1">LOGIN</h1>
                    <h2>Please enter Your Username and Password</h2>
                    <div className="login-form-area">
                        <div className="login-input-field">
                            <input type="text" name="username" placeholder="Username" className="login-username"/>
                        </div>
                        <div className="login-input-field">
                            <input type="password" name="password" placeholder="Password" className="login-password"/>
                        </div>
                        <div className="login-submit">
                            <button type="submit" name="submit" className="login-submit-button">LogIn</button>
                        </div>
                    </div>
                    <h3>Forgot Password?</h3>
                    <span>Not Registered Yet?</span>
                    <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                        <span className="link"><u>SignUp</u></span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;