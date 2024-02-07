import React from 'react'
import homeatz from '../Images/homeatz.png'
import { Link } from 'react-router-dom'
import './Product.css'
import './Animation.css'

export default function Product() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row my-2 py-5">
          <h1 className='my-3 display-6 text-center fw-bold vxeq'>OUR PRODUCTS</h1>
          <div className=" text-center py-5" id='main' >
            <div>
              <Link to='https://homeatz.in/'>
                <img src={homeatz} alt="" className="pic" />
              </Link>
              <p className='fs-4 text ms-3 mt-2 fw-bold'>HOMEATZ</p>
            </div>
           
          </div>

        </div>
      </div>
    </>
  )
}
