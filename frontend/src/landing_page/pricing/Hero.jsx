import React from 'react';

export default function Hero(){
    return (
        <div className="container p-5">
            <div className="div text-center mt-5">
                <h2 style={{color:"#424242"}}>Charges</h2>
                <h4 className='fw-normal fs-5 mt-3' style={{color:"#9b9b9b"}}>List of all charges and taxes</h4>
            </div>
            <div className="row p-5 text-center">
                <div className="col">
                    <img src="media/images/pricing0.svg" alt="" style={{width:"80%"}} />
                    <h3 style={{color:"#424242"}}>Free equity delivery</h3>
                    <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col">
                    <img src="media/images/intradayTrades.svg" alt=""  style={{width:"80%"}} />
                    <h3 style={{color:"#424242"}}>Intraday and F&O trades</h3>
                    <p className='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col">
                    <img src="media/images/pricing0.svg" alt=""  style={{width:"80%"}} />
                    <h3 style={{color:"#424242"}}>Free direct MF</h3>
                    <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}