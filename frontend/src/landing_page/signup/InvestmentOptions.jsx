import React from "react";

function InvestmentOptions() {
  return (
    <div className="container p-5 mt-5">
      <h3 className="text-center" style={{ color: "#424242" }}>
        Investment options with Zerodha demat account
      </h3>
      <div className="row p-5">
        <div className="col-6 d-flex gap-4 px-5">
          <img src="media/images/stocks-acop.svg" alt="" />
          <div className=" ">
            <h5>Stocks</h5>
            <p className="me-5 text-muted">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>
        <div className="col-6 d-flex gap-4 px-5">
          <img src="media/images/mf-acop.svg" alt="" />
          <div className=" ">
            <h5>Mutual Funds</h5>
            <p className="me-5 text-muted">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-6 d-flex gap-4 px-5">
          <img src="media/images/ipo-acop.svg" alt="" />
          <div className=" ">
            <h5>IPO</h5>
            <p className="me-5 text-muted">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>
        <div className="col-6 d-flex gap-4 px-5">
          <img src="media/images/mf-acop.svg" alt="" />
          <div className=" ">
            <h5>Futures & options</h5>
            <p className="me-5 text-muted">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>
      <div className="text-center  mt-5">
        <button
          className="text-white fw-medium fs-5 rounded"
          style={{
            width: "20%",
            padding: "10px 24px",
            border: "none",
            backgroundColor: "#387ED1",
          }}
        >
          Explore investments
        </button>
      </div>
    </div>
  );
}

export default InvestmentOptions;
