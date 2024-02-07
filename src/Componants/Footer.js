import React from 'react'
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpeg';
import img5 from '../Images/img5.jpeg';
import logo from '../Images/logo.jpeg';
import {Link} from 'react-router-dom'


export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white  p-5">
                <div className="row" style={{letterSpacing:"1px"}}>
                    <div className="col-md-2 text-center" >
                        <img src={logo} alt="" width="130px"height="130px" style={{border:"2px solid inherit",borderRadius:"900px",marginTop:"10px"}} />
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3 pt-3'>Site Map</h3>
                        <ul style={{listStyle:"none",textDecoration:"none",display:"flex",flexDirection:"column",paddingLeft:"0"}}  >
                            <li><Link className='fs-5   text-decoration-none text-white' style={{marginLeft:"0"}} to='/'>Home</Link></li>
                            <li><Link className='fs-5 text-decoration-none text-white' to='/product'>Product</Link></li>
                            <li><Link className='fs-5 text-decoration-none text-white' to='/mig'>Migration</Link></li>
                            <li><Link className='fs-5 text-decoration-none text-white' to='/about'>About</Link></li>
                            <li><Link className='fs-5 text-decoration-none text-white' to='/galery'>Gallery</Link></li>
                        
                        
                       
                        
                        
                        </ul>
                    </div>


                    <div className="col-md-4">
                        <h3 className='mb-3 pt-3'>Contact Info</h3>
                        <p>421, C - 2, Orbit Plaza Crossing Republic <br />
                            GHAZIABAD Ghaziabad UP 201016 IN</p>
                        <p className='fs-5'><i className="fa-solid fa-envelope me-2 text-danger"></i>ceo@vxeq.com</p>
                        <p className='fs-5'><i class="fa-solid fa-phone text-danger me-2"></i>+91-9457030089</p>

                        {/* <h5 className='my-1'>Mobile No:</h5>
                        <p className='mb-1'>+91-9457030089 </p>
                        <h5 className='my-1'>Email:</h5>
                        <p className='mb-1'>ceo@vxeq.com</p>
                        <h5 className='my-1'>Address:</h5>
                        <p className='mb-1'>421, C - 2, Orbit Plaza Crossing Republic <br /> GHAZIABAD Ghaziabad UP 201016 IN</p>
                        <h5 className='my-1'>GST NO:</h5>
                        <p className='mb-1'>09AAGCV4082Q1ZI</p>
                        <h5 className='my-1'>PAN NO:</h5>
                        <p className='mb-1'>AAGCV4082Q</p>
                        <h5 className='my-1'>Registration Number:</h5>
                        <p className='mb-1'>103827</p> */}
                    </div>
                    <div className="col-md-3">
                        <h2 className='mb-3 text-center pt-3'>Gallery</h2>
                        <div>
                            <div style={{ display: "flex",justifyContent:"center"}}>
                                <img src={img1} alt="" style={{ height: "85px", width: "85px", margin: "8px" }} />
                                <img src={img3} alt="" style={{ height: "85px", width: "85px", margin: "8px" }} />
                                <img src={img2} alt="" style={{ height: "85px", width: "85px", margin: "8px" }} />
                            </div>
                            <div style={{ display: "flex",justifyContent:"center" }}>
                                <img src={img4} alt="" style={{ height: "85px", width: "100px", margin: "10px" }} />
                                <img src={img5} alt="" style={{ height: "85px", width: "100px", margin: "10px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
