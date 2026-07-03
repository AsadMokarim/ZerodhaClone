import React from 'react';

export default function Team() {
    return (
        <div className="container p-5">
            <h1 className='text-center fw-normal fs-3'>People</h1>
            <div className="row p-5 mt-5">
                <div className="col text-center">
                    <img src="media/images/nithinKamath.jpg" className='rounded-circle' alt="Nithin Kamath" style={{width:"60%"}}/>
                    <h5 className='fs-4 mt-3'>Nithin Kamath</h5>
                    <p className='text-muted'>Founder CEO</p>
                </div>
                <div className="col p-5" style={{lineHeight:"1.8", fontSize:"1.05em"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a className='text-decoration-none' href="">Homepage</a> / <a className='text-decoration-none' href="">TradingQnA</a> / <a className='text-decoration-none' href="">TradingQnA</a>
                    </p>
                </div>
            </div>

        </div>
    )
}