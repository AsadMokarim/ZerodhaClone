import React from 'react';


function Education() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <h2 className='mb-4'>Free and open market education</h2>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className='text-decoration-none'>Versity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-4'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className='text-decoration-none'>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;