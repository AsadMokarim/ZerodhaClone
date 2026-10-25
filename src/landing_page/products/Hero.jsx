import React from 'react';

export default function Hero(){
    return (
        <div className="container text-center p-5 d-flex flex-column gap-3">
            <h3 style={{color:"#424242"}}>Zerodha Products</h3>
            <h5 className='text-muted fw-normal'>Sleek, modern and intuitive trading platforms</h5>
            <h6 className='text-muted fw-normal '>Check out our <a href="" className='text-decoration-none' > investment offerings <i class="fa-solid fa-arrow-right"></i></a></h6>
        </div>
    )
}