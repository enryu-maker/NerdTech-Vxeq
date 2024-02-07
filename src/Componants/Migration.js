import React from 'react';
import logo from '../Images/logo.jpeg';
import Mcards from '../Componants/Mcards';
import Maccordion from '../Componants/Maccordion';
import Advantages from './Advantages';
import './Animation.css'

export default function Migration() {
  return (
    <div className="container-fluid bg-light">
    
      <div className="row py-3">
        <div className="d-flex justify-content-center pt-3 align-items-center">
          <img src={logo} alt="Company Logo" style={{ height: "100px", width: "110px" }} />
          <h1 className="fw-bolder vxeq ms-3">VXEQ INFRA FACILITIES PVT LTD</h1>
        </div>
      </div>

      {/* Introduction section */}
      <div className="row">
        <div className="col text-center">
          <h2 style={{color:"blue",fontWeight:"bolder",fontSize:"33px",letterSpacing:"1px"}}>MIGRATION CONSULTANT</h2>
          <h3 style={{color:"blue",fontWeight:"bold",fontSize:"28px"}}>for Singapore, Canada & Australia</h3>
          <p className='text-secondary fs-5'>Guaranteed Offer to return consultancy fee, if migration does not mature</p>
        </div>
      </div>

      {/* Cards and Accordion Components */}
      <Mcards />
      <Advantages/>
      <Maccordion />

      {/* Consultancy details section */}
      <div className="row bg-light py-5  fw-bold">
        <div className="col pb-5">
          <h4 className="mb-5 mt-2 text-center pb-3 fs-1 fw-bold ">Migration Consultancy for Singapore, Canada & Australia</h4>
          <div className="row justify-content-around text-secondary ms-2" style={{letterSpacing:"1px"}}>
            <div className='col-md-3 '>
              <p className="fs-6">Registration Fee $100 (Non Refundable)</p>
              <h6 className="fw-bolder mt-3 fs-5">Contact Us</h6>
              <p>+91 135 3561892, +91 9457030089</p>
            </div>
            <div className='col-md-5'>
              <p className="fs-6">Processing Fee $5000 only (Refundable if migration application is finally rejected), after feasibility and scrutiny of documents of individuals.</p>
              <h6 className='fw-bold mt-3 fs-5'>Website</h6>
              <p>VXEQ.IN</p>
            </div>
            <div className='col-md-4'>
              <p className="fs-6">Processing Period: One to three years.</p>
              <h6 className='fw-bold mt-3 fs-5'>Our USP</h6>
              <p>VXEQ IFPL is an IIT’ian Startup, which believes in guaranteed genuine services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
