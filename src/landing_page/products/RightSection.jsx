import React from 'react';

export default function RightSection({ imageURL, linkTxt, prodDesc, prodName }) {
    return (
        <div className="container ml-4 mt-5">
            <div className="row">
                {/* <div className="col p-5" style={{ marginTop:"10px", marginLeft: "100px", marginRight: "100px" }}> */}
                <div
                    className="col-4 d-flex flex-column justify-content-center align-items-start" style={{paddingLeft:"120px"}}
                >
                    <h1 className='fs-2' style={{ color: "#424242" }}>{prodName}</h1>
                    <p className='text-muted mt-4' style={{ lineHeight: "1.8" }}>{prodDesc}</p>
                    <div className="mb-4 mt-4">
                        {
                            linkTxt ? <a
                                href=""
                                className='text-decoration-none'>
                                {linkTxt} <i class="fa-solid fa-arrow-right"></i>
                            </a>
                                : ""
                        }
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6" style={{ }}>
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    )
}