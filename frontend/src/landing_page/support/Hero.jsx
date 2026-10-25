import React from 'react';

export default function Hero() {
    return (
        <div className="p-5" style={{ backgroundColor: "#f6f6f6" }}>
            <div className="container">
                <div className='d-flex '>
                    <h1>Support Portal</h1>
                    <button className='btn btn-primary fs-6 fw-medium p-2' style={{ marginLeft: "auto", width: "9%", height: "10%" }}>My tickets</button>

                </div>
                <form class="d-flex mt-4" role="search">
                    <input class="form-control me-4 p-3 text-muted" type="search" placeholder="Eg: How do I open my account, How do I activate F&O..." aria-label="Search"/>
                    <button class="btn btn-outline-success p-3" type="submit">Search</button>
                </form>

            </div>

        </div>
    )
}