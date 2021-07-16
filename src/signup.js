import React , { useState } from 'react';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

const SignUp = () => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [attempt, setAttempt] = useState(false);

    const onChangeHandler = (fieldName, value)=>{
        if(fieldName === "firstname"){
          setFirstName(value);
        }
        else if(fieldName==="lastname"){
            setLastName(value);
          }
        else if(fieldName==="email"){
          setEmail(value);
        }
        else if(fieldName==="username"){
            setUserName(value);
        }
        else if(fieldName==="password"){
            setPassword(value);
        }
        
    }

    const onSubmitHandler = (e)=>{

        e.preventDefault();

        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');

        if(!firstname)
        {
            alert("Please enter First Name");
            return;
        }
        if(!lastname)
        {
            alert("Please enter Last Name");
            return;
        }
        if(!email)
        {
            alert("Please enter Email");
            return;
        } else if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            alert("Please enter a Valid Email")
            return;
        }
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
        
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(username);
        console.log(password);

        setAttempt(true);

    }

    return(
        <div className="login">
            <div className="signup-form">
                <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                    <h1 className="signup-h1">SIGNUP</h1>
                    <div className="signup-form-area">
                    <div className="signup-input-field">
                        <input type="text" name="firstName" placeholder="First Name" className="signup-FirstName" onChange={(e)=>{ onChangeHandler("firstname",e.target.value)}}/>
                    </div>
                    <div className="signup-input-field">
                        <input type="text" name="lastName" placeholder="Last Name" className="signup-LastName" onChange={(e)=>{ onChangeHandler("lastname",e.target.value)}}/>
                    </div>
                    <div className="signup-input-field">
                        <input type="text" name="email" placeholder="Email" className="signup-Email" onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>
                    </div>
                    <div className="signup-input-field">
                        <input type="text" name="username" placeholder="Username" className="signup-username" onChange={(e)=>{ onChangeHandler("username",e.target.value)}}/>
                    </div>
                    <div className="signup-input-field">
                        <input type="password" name="password" placeholder="Password" className="signup-password" onChange={(e)=>{ onChangeHandler("password",e.target.value)}}/>
                    </div>
                    <div className="signup-submit">
                        <button type="submit" name="submit" className="signup-submit-button">SignUp</button>
                    </div>
                    </div>
                    <h3>Already Registered?</h3>
                    <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                        <div className="link"><u>Sign In</u></div>
                    </Link>

                    {attempt? <Redirect to="/registered" /> : null}

                </form>
                
            </div>
        </div>
    );
};

export default SignUp;