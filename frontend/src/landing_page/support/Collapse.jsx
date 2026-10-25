function Collapse({ heading, body, id, icon }) {
    return (
        <>
            <a
                class="text-decoration-none d-inline-flex gap-3 border align-items-center fs-5 fw-normal"
                style={{ color: "#424242", width: "100%" }}
                data-bs-toggle="collapse"
                href={`#${id}`}
                role="button"
                aria-expanded="false"
                aria-controls={id}
            >
                <div style={{ backgroundColor: "#F7FBFE", color: "#3B7ED1" }} className='p-3 fs-4' >
                    <i class={icon} ></i>
                </div>
                {heading}
                <i style={{ marginLeft: "auto", color: "#3B7ED1" }} class="fa-solid fa-angle-down pe-5"></i>
            </a>
            <div class="collapse mt-2" id={id}>
                <div class="card card-body ps-5">
                    <ul className="d-flex flex-column gap-3 mt-2" style={{fontSize:"1.1rem"}}>
                        {body.map((el, idx) => (
                            <a href="" style={{ color: "#3b7ed1" }} className="text-decoration-none"><li key={idx}>{el}</li></a>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Collapse;