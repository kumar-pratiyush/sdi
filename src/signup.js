import React from 'react';

const SignUp = () => {
    return(
        <div className="login">
            <div className="signup-form">
            <form>
                    <h1 className="signup-h1">SIGNUP</h1>
                    {/* <img src={logo} alt="login-img" /> */}
                    <div className="signup-form-area">
                        <div className="signup-input-field">
                            <input type="text" name="firstName" placeholder="First Name" className="signup-FirstName"/>
                        </div>
                        <div className="signup-input-field">
                            <input type="text" name="lastName" placeholder="Last Name" className="signup-LastName"/>
                        </div>
                        <div className="signup-input-field">
                            <input type="text" name="email" placeholder="Email" className="signup-Email"/>
                        </div>
                        <div className="signup-input-field">
                            <input type="text" name="username" placeholder="Username" className="signup-username"/>
                        </div>
                        <div className="signup-input-field">
                            <input type="password" name="password" placeholder="Password" className="signup-password"/>
                        </div>
                        <div className="signup-submit">
                            <button type="submit" name="submit" className="signup-submit-button">SignUp</button>
                        </div>
                    </div>
                    <h3>Already Registered?</h3>
                    <div><a href="/sign-in" >Sign In</a></div>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;