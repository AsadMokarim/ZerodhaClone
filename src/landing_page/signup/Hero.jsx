import React from 'react';

function Hero() {
    return (
        <div className="container  p-5">
            <div className='mt-3 mb-5 text-center'>
                <h2 style={{ color: "#424242" }}>Open a free demat and trading account online</h2>
                <h4 className='fw-normal fs-5 mt-3' style={{ color: "#666" }}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <img src="media/images/signup.png" style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <form action="">
                            <h4 style={{ color: "#424242" }}>Signup now</h4>
                            <h6 className='fw-normal' style={{ color: "#9b9b9b" }}>Or track your existing application</h6>
                            <div className="input-group mb-3 mt-4">
                                <span className="input-group-text fs-5" id="basic-addon1">
                                    <img src="media/images/india-flag.svg" alt="India Flag" style={{ width: "30px", height: "auto", marginRight: "8px" }} />
                                    +91
                                </span>
                                <input type="number" className="form-control p-3 text-muted fs-5" placeholder="Enter your mobile number" aria-label="Enter your mobile number" aria-describedby="basic-addon1" />
                            </div>

                            <button className='text-white fw-medium fs-5 rounded'
                                style={{
                                    width: "70%",
                                    padding: "10px 24px",
                                    border: "none",
                                    backgroundColor: "#387ED1"
                                }}
                            >
                                Get OTP
                            </button>
                            <p className='text-muted mt-4' style={{ fontSize: "0.8rem" }}>
                                By proceeding, you agree to the Zerodha
                                <a href="" className='text-decoration-none' style={{ color: "#387ED1" }}> terms </a>
                                &
                                <a href="" className='text-decoration-none' style={{ color: "#387ED1" }}> privacy policy</a>
                            </p>
                            <hr />
                            <p className='text-muted mt-2' style={{ fontSize: "0.8rem" }}>
                                Looking to open NRI account?
                                <a href="" className='text-decoration-none' style={{ color: "#387ED1" }}> Click here </a>
                            </p>
                        </form>
                    </div>
                    <div className="col-1"></div>

                </div>
            </div>
        </div>
    );
}

export default Hero;