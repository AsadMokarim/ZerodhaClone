import React from 'react';

export default function LeftSection({ imageURL, prodName, prodDesc, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container ml-4">
            <div className="row">
                <div className="col" style={{ marginLeft: "40px" }}>
                    <img src={imageURL} alt="" />
                </div>
                <div className="col p-5 mt-5" style={{ marginLeft: "200px", marginRight: "100px" }}>
                    <h1 className='fs-2' style={{ color: "#424242" }}>{prodName}</h1>
                    <p className='text-muted mt-4' style={{ lineHeight: "1.8" }}>{prodDesc}</p>
                    <div className="mb-4 mt-4">
                        {
                            tryDemo ? <a
                                href=""
                                className='text-decoration-none'>
                                {tryDemo} <i class="fa-solid fa-arrow-right"></i>
                            </a>
                                : ""
                        }

                        {
                            learnMore ? <a
                                href=""
                                className='text-decoration-none'
                                style={{ marginLeft: "50px" }}>
                                {learnMore} <i class="fa-solid fa-arrow-right"></i>
                            </a>
                                : ""
                        }

                    </div>
                    <br />
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg" alt="" />
                    </a>
                    <a href={googlePlay} style={{ marginLeft: "20px" }}>
                        <img src="media/images/appstoreBadge.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}