import React, { useState } from 'react';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

const Login = () => {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [attempt, setAttempt] = useState(false);

    const onChangeHandler = (fieldName, value)=>{

        if(fieldName==="username"){
            setUserName(value);
        }
        else if(fieldName==="password"){
            setPassword(value);
        }
        
    }

    const onSubmitHandler = (e)=>{

        e.preventDefault();

        if(!username)
        {
            alert("Please enter Username");
            return;
        }
        if(!password)
        {
            alert("Please enter Password");
            return;
        }
        
        console.log(username);
        console.log(password);

        setAttempt(true);
        
    }

    return(
        <div className="login">
            <div className="login-form">
                <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                    <h1 className="login-h1">LOGIN</h1>
                    <h2>Please enter Your Username and Password</h2>
                    <div className="login-form-area">
                        <div className="login-input-field">
                            <input type="text" name="username" placeholder="Username" className="login-username" onChange={(e)=>{ onChangeHandler("username",e.target.value)}}/>
                        </div>
                        <div className="login-input-field">
                            <input type="password" name="password" placeholder="Password" className="login-password" onChange={(e)=>{ onChangeHandler("password",e.target.value)}}/>
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

                {attempt? <Redirect to="/landing" /> : null}

            </div>
        </div>
    );
};

export default Login;