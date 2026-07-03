import React from "react";

function Steps() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#FAFAFB",
        padding:"60px 15px"
      }}
    >
      <h3 className="text-center" style={{ color: "#424242" }}>
        Steps to open a demat account with Zerodha
      </h3>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <img
              src="media/images/steps-acop.svg"
              alt=""
              style={{ width: "" }}
            />
          </div>
          <div className="col mt-5" style={{ color: "#424242" }}>
            <div>
              <h5 className="">
                <span className="fw-normal border rounded-circle px-2 py-1 fs-6 me-3">
                  01
                </span>
                Enter the requested details
              </h5>
              <hr />
            </div>
            <div className="mt-4">
              <h5 className="">
                <span className="fw-normal border rounded-circle px-2 py-1 fs-6 me-3">
                  02
                </span>
                Complete e-sign & verification
              </h5>
              <hr />
            </div>
            <div className="mt-4">
              <h5 className="">
                <span className="fw-normal border rounded-circle px-2 py-1 fs-6 me-3">
                  03
                </span>
                Start investing!
              </h5>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
