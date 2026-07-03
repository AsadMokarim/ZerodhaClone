import React from 'react';
import Collapse from './Collapse';

export default function RaiseTicket() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-9 d-flex flex-column gap-3">
                    <Collapse
                        heading="Account Opening"
                        body={["Residential individual", "Minor", "Non Residential Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}
                        id="accountopening"
                        icon="fa-solid fa-circle-plus"
                    />
                    <Collapse
                        heading="Your Zerodha Account"
                        body={["Your Profile",
                            "Account modification", "Client Master Report(CMR) and Depository Participant(DP)", "Nomination", "Transfer and conversion of securities"]}
                        id="zerodhaAccount"
                        icon="fa-regular fa-circle-user"
                    />
                    <Collapse
                        heading="Kite"
                        body={[
                            "IPO",
                            "Trading FAQs",
                            "Margin Trading Facility (MTF) and Margins",
                            "Charts and orders",
                            "Alerts and Nudges",
                            "General",
                        ]}
                        id="kite"
                        icon="fa-brands fa-xing"
                    />
                    <Collapse
                        heading="Funds"
                        body={[
                            "Add money",
                            "Withdraw money",
                            "Add bank accounts",
                            "eMandates"
                        ]}
                        id="funds"
                        icon="fa-solid fa-indian-rupee-sign"
                    />
                    <Collapse
                        heading="Console"
                        body={[
                            "Portfolio",
                            "Corporate actions",
                            "Funds statement",
                            "Reports",
                            "Profile",
                            "Segments"
                        ]}
                        id="console"
                        icon="fa-brands fa-nimblr"
                    />
                    <Collapse
                        heading="Coin"
                        body={[
                            "Mutual funds",
                            "National Pension Scheme (NPS)",
                            "Fixed Deposit (FD)",
                            "Features on Coin",
                            "Payments and Orders",
                            "General"
                        ]}
                        id="coin"
                        icon="fa-solid fa-coins"
                    />
                </div>
                <div className="col-3">
                    <ul
                        className='ps-5 p-2 d-flex flex-column gap-3 pb-3 mb-3'
                        style={{
                            backgroundColor: "#FFF4E5",
                            borderLeft: "7px solid #FF9100",
                            fontSize: "1.05em"
                        }}

                    >
                        <a href="" style={{ color: "#3B7ED1", lineHeight: "1.6" }}><li>Offer for sale (OFS) – June 2026</li></a>
                        <a href="" style={{ color: "#3B7ED1", lineHeight: "1.6" }}><li>Latest Intraday leverages and Square-off timings</li></a>
                    </ul>

                    <div className='border'>
                        <h5
                            className='p-3 fs-6'
                            style={{ backgroundColor: "#F6F6F6", fontWeight: "500" }}
                        >Quick links</h5>
                        <div className='d-flex flex-column'>
                            <a href="" className='text-decoration-none border-bottom p-2 ps-3 ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}>1. Track account opening</a>
                            <a href="" className='text-decoration-none border-bottom p-2 ps-3 ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}>2. Track segment activation</a>
                            <a href="" className='text-decoration-none border-bottom p-2 ps-3 ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}>3. Intraday margins</a>
                            <a href="" className='text-decoration-none border-bottom p-2 ps-3 ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}>4. Kite User manual</a>
                            <a href="" className='text-decoration-none border-bottom p-2 ps-3 ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}>5. Learn how to create a ticket</a>
                        </div>
                        {/* <ol className=''>
                            <a href="" className='text-decoration-none ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}><li style={{}}>Track account opening</li></a>
                            <a href="" className='text-decoration-none ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}><li>Track segment activation</li></a>
                            <a href="" className='text-decoration-none ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}><li>Intraday margins</li></a>
                            <a href="" className='text-decoration-none ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}><li>Kite User manual</li></a>
                            <a href="" className='text-decoration-none ' style={{ color: "#3b7ed1", fontSize: "1.1em" }}><li>Learn how to create a ticket</li></a>
                        </ol> */}
                    </div>
                </div>
            </div>
        </div>
    )
}