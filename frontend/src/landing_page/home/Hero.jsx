import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5 ">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        
          <Link
            className="text-white fw-medium fs-5 rounded"
            style={{
              margin:"0 auto",
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

export default Hero;
