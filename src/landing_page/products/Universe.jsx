import React from 'react';

import { Link } from 'react-router-dom';

export default function Universe() {
    return (
        <div className="container mt-5 p-5 mb-5 text-center">
            <h4 className='fw-normal fs-4 mb-5'>Want to know more about our technology stack? Check out the <a href="" className='text-decoration-none fw-medium'>Zerodha.tech</a> blog.</h4>

            <h2 className='fs-3 mb-4' style={{ color: "#424242", marginTop: "60px" }}>
                The Zerodha Universe
            </h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row p-5 text-justified">
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/zerodhaFundhouse.png" alt="" style={{ width: "50%" }} />
                        <p className='text-muted mt-3 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/sensibullLogo.svg" alt="" style={{ width: "60%" }} />
                        <p className='text-muted mt-4 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/tijori.svg" alt="" style={{ width: "40%" }} />
                        <p className='text-muted mt-2 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </a>
                </div>
            </div>
            <div className="row p-4 text-justified">
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/streakLogo.png" alt="" style={{ width: "50%" }} />
                        <p className='text-muted mt-3 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/smallCaseLogo.png" alt="" style={{ width: "50%" }} />
                        <p className='text-muted mt-4 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href="" className='text-decoration-none'>
                        <img src="media/images/dittoLogo.png" alt="" style={{ width: "40%" }} />
                        <p className='text-muted mt-3 ' style={{ fontSize: "0.8em", padding: "0px 50px" }}>
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </a>
                </div>
            </div>
            <Link to="/signup" className='btn btn-primary fs-5 mt-5 fw-medium' style={{padding:"10px 45px"}}>Sign up for free</Link>
        </div>

    )
}