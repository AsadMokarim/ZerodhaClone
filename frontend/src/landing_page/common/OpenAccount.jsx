import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 ">Open a Zerodha Account</h1>
        <p>
          Modern platforms and apps, &#8377;0 investments, and flat &#8377;20
          intraday and F&O trades.
        </p>
        <Link
          className="text-white fw-medium fs-5 rounded"
          style={{
            margin: "0 auto",
            width: "20%",
            padding: "10px 44px",
            border: "none",
            backgroundColor: "#387ED1",
            textDecoration: "none",
          }}
          to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
