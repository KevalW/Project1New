import React, { useState } from 'react';
import '../App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";



function SignUp() {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("verification mail sent");
            
                    })
            })
            .catch((error) => {
                // const errorMessage = error.message;
                const errorCode = error.code;
                alert(errorCode);
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.emailVerified);
                if (user.emailVerified === true){
                    alert("verified")
                    
                }else{
                    alert("Not verified")
                }
            })
            .catch((error) => {
                //const errorMessage = error.message;
                const errorCode = error.code;
                alert(errorCode);
            });
    }


    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <span>Log In </span>
                                <span>Sign Up</span>
                            </h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                {/* login email */}
                                                <div className="form-group">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                {/* login password */}
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                {/* login button */}
                                                <div>
                                                    <button className="btn mt-4" onClick={signIn} >Submit</button>
                                                    {/*forgot password */}
                                                    <p className="mb-0 mt-4 text-center"><Link to="/forgot">Forgot password</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                {/* signUP namme */}
                                                <div className="form-group">
                                                    <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                {/* signUP post */}
                                                <div className="form-group mt-2">
                                                    <select className="form-style">
                                                        <option value="option1">Assistance Professor</option>
                                                        <option value="option2">Class Teacher</option>
                                                        <option value="option3">Head Of Department</option>
                                                    </select>
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                {/* signUP email */}
                                                <div className="form-group mt-2">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                {/* signUP password */}
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                {/* signUP submit button */}
                                                <div>
                                                    <button className="btn mt-4" onClick={signUp}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
