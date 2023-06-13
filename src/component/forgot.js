import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Forgot() {
  const [otpTimer, setOtpTimer] = useState(60); // Set initial timer value to 60 seconds

  useEffect(() => {
    let intervalId;

    // Start the timer countdown
    if (otpTimer > 0) {
      intervalId = setInterval(() => {
        setOtpTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    // Clear the interval when the timer reaches 0
    if (otpTimer === 0) {
      clearInterval(intervalId);
    }

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [otpTimer]);

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

                  {/* Email Verify-------------------------------------------------------- */}
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Verify Email Address</h4>
                        <div className="form-group">
                          <input type="text" name="logname" className="form-style" placeholder="Enter Email Id" id="logname" autoComplete="off" />
                          <p className="mb-0 mt-4 text-center">
                            {otpTimer > 0 ? (
                              `Time remaining: ${otpTimer} seconds`
                            ) : (
                              <Link to="/signup">Resend OTP</Link>
                            )}
                          </p>
                        </div>
                        {otpTimer > 0 && (
                          <div className="form-group mt-2">
                            <input type="text" name="logname" className="form-style" placeholder="Enter OTP" id="logname" autoComplete="off" />
                          </div>
                        )}
                        <div>
                          <button className="btn mt-4">Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Email Verification End----------------------------------------------------- */}


                  {/*  Change password------------------------------------------------------------*/}
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Set New Password</h4>
                        <div className="form-group">
                          <input type="text" name="logname" className="form-style" placeholder="Enter New Password" id="logname" autoComplete="off" />
                        </div><br></br>
                        <div className="form-group mt-2">
                          <input type="email" name="logemail" className="form-style" placeholder="Confirm Your Password" id="logemail" autoComplete="off" />
                        </div>
                        <div>
                          <button className="btn mt-4">Submit</button>
                        </div>
                        {/* Change Password End---------------------------------------------------- */}


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

export default Forgot;
