import React from 'react';


function Stats() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className='mb-5'>Trust with confidence</h1>

                    <div>
                        <h3>Customer-first always</h3>
                        <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with Rs.3.5+ lakh crorers worth of equity investments.</p>
                    </div>
                    <div>
                        <h3>No spams or gimmicks</h3>
                        <p className='text-muted'>No gimmicks, spam "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>

                    <div>
                        <h3>The Zerodha Universe</h3>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored service specific to your needs.</p>
                    </div>

                    <div>
                        <h3>Do better with money</h3>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>



                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="" style={{ width: "100%" }} />
                    <div className="container text-center mt-2">
                        <div className="row">
                            <div className="col-6">
                                <a href="#" className='text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-6">
                                <a href="#" className='text-decoration-none'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;