import React from 'react'
import form from '../Images/form.jpeg'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// import './Consultant.css'


export default function Consultant() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className="container-fluid bg-light  pb-5  " >
                <div className="row con">

                    <div className="col-md-6 pt-5">
                        <img src={form} alt="" className=' img-thumbnail  mt-5 img-fluid' />
                    </div>


                    <div className="col-md-5 mt-5 bg-light  shadow  border-primary border-top  border-5 " style={{height:"620px",background:"inherit"}} >
                        <h3 className='text-center fw-bolder fs-2  pt-3' style={{letterSpacing:"2px"}}>Consulting Form</h3>
                        <form className='px-5  ' action="" style={{height:"400px"}} noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Label htmlFor="name" className='mt-3 mb-2 fw-bold' style={{ fontSize: "18px" }} >Name:</Form.Label>
                            <Form.Control type="text" id="name" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Let me know your name" />

                            <Form.Label htmlFor="email" className='my-1 mb-2 fw-bold' style={{ fontSize: "18px" }}>Your Email:</Form.Label>
                            <Form.Control type="email" id="email" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="name@gmail.com" />

                            <Form.Label htmlFor="contact" className='my-1 mb-2 fw-bold' style={{ fontSize: "18px" }}>Contact:</Form.Label>
                            <Form.Control type="text" id="cont" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Let me know your contact" />

                            <Form.Label htmlFor="comment" className='my-1 mb-2 fw-bold' style={{ fontSize: "18px" }}>Comment:</Form.Label>
                            <Form.Control as="textarea" className='mt-2 mb-4' style={{ fontFamily: "serif" }} placeholder="Leave a comment here" />

                            <center><button type="button" class="btn btn-primary mt-3 fw-bold mb-5 px-4  ">Send Message</button></center>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
