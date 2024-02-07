import React from 'react';
import logo from '../Images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-md-2">
                        <div className='mt-3 text-center'><img src={logo} alt="" style={{ height: "120px", width: "120px" }} /></div>
                    </div>
                    <div className="col-md-10">
                        <div className='py-2 pt-2 mt-1'>
                            {/* Show the following spans only on lg (large) screens and above */}
                            <div className="d-none d-lg-block">
                                <span className='me-5 ms-5'><i className="fa-solid fa-envelope me-2 text-danger"></i>ceo@vxeq.com</span>
                                <span className=' ms-5'><i className="fa-solid fa-location-dot me-2 text-danger"></i>421, C - 2, Orbit Plaza Crossing Republic
                                    GHAZIABAD Ghaziabad UP 201016 IN</span>
                            </div>
                        </div>
                        <div>
                            <nav className="navbar navbar-expand-lg bg-dark fs-5 mt-1 ">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon bg-white"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{letterSpacing:"1px"}}>
                                            <li className="nav-item">
                                                <Link className="nav-link active me-5 fw-bold text-white" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-5 text-white fw-bold" to="/product">Product</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-5 text-white fw-bold" to="/mig">Migration</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-5 text-white fw-bold" to="/about">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link me-5 text-white fw-bold" to="/gallery">Gallery</Link>
                                            </li>
                                        </ul>
                                        <div className='col-md-2'>
                                            <form className="d-flex" role="search">
                                                <button className="btn btn-primary fw-bold  px-2" onClick={()=> navigate('/consultant')} style={{ height: "70px" }} type="submit">Book a Consultant</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




