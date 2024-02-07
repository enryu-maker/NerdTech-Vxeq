import React from 'react';
import main from '../Images/main.jpg';
import main3 from '../Images/main3.jpeg';
import main4 from '../Images/main4.jpeg';
// import mentor from '../Images/mentor.jpeg';
import mentor from '../Images/abouts.jpg';
import consultancy from '../Images/consultancy.jpeg';
import company from '../Images/company.jpeg';
import app from '../Images/app.jpeg';
import home from '../Images/home.jpg';
import './Home.css';
import './Animation.css';

export default function Home() {
  const array = [
    {
      img: mentor,
      info: "Mentorship Service",
      text: "We provide mentorship for aspiring professionals.",
    },
    {
      img: consultancy,
      info: "Consultancy Service",
      text: "We provide consultancy services for businesses.",
    },
    {
      img: company,
      info: "Company Service",
      text: "We provide services tailored for companies.",
    },
    {
      img: app,
      info: "App Service",
      text: "We develop applications for various platforms.",
    },
    {
      img: home,
      info: "Home Service",
      text: "We offer home-based services for your convenience.",
    }
  ];

  return (
    <>
      <div className="container-fluid bg-light p-3  h-90 ">
        
          <div id="carouselExampleInterval" className="carousel slide h-90" data-bs-ride="carousel">
            <div className="carousel-inner pt-3">
              <div className="carousel-item active">
                <img src={main} className="d-block w-100 " alt="..." style={{ height: "450px" }} />
              </div>
              <div className="carousel-item">
                <img src={main3} className="d-block w-100 " alt="..." style={{ height: "450px" }} />
              </div>
              <div className="carousel-item">
                <img src={main4} className="d-block w-100 " alt="..." style={{ height: "450px" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        
      </div>

      <div className="container-fluid bg-light">
        <h1 className="text-center fw-bold py-3 pt-5 vxeq">OUR SERVICES</h1>

        <div className="row justify-content-center">
          {array.map((item, index) => (
            <div className="content col-md-2 col-sm-12 mb-5 pt-5">
              <div className="content-overlay"></div>
              <img className="content-image" src={item.img} alt="" style={{ height: '320px', objectFit: 'cover' }} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{item.info}</h3>
                <p className="content-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

