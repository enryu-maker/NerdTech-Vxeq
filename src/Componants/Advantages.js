
import React from 'react';
import Aimg from '../Images/Aimg.jpg';
import Simg from '../Images/Simg.jpeg';
import Cimg from '../Images/Cimg.jpeg';
import './Ad.css'
import './Animation.css'

export default function Advantages() {
  const migrationAdvantages = [
    {
      country: "Singapore",
      img: Simg,
      advantages: [
       
        {
          category: "Economic Stability",
          details: "Singapore has a strong and stable economy, making it an attractive destination for professionals seeking job opportunities and business ventures."
        },
        {
          category: "Global Hub",
          details: "Singapore is a global business hub with a strategic location in Asia. It offers excellent connectivity, making it an ideal base for international business activities."
        },
        {
          category: "Quality of Life",
          details: "Singapore consistently ranks high in terms of quality of life. It boasts a clean and safe environment, efficient public services, and a diverse cultural scene."
        },
        {
          category: "Education Hub",
          details: "Singapore is home to world-renowned educational institutions, making it an excellent choice for families looking for quality education for their children."
        },
        {
          category: "Efficient Infrastructure",
          details: "The city-state has a well-developed infrastructure, including a reliable public transportation system and modern facilities."
        }
      ]
    },
    {
      country: "Canada",
      img: Cimg,
      advantages: [
        {
          category: "High Quality of Life",
          details: "Canada is known for its high standard of living, excellent healthcare, and a strong social support system."
        },
        {
          category: "Diverse Opportunities",
          details: "Canada has a diverse and growing economy, providing opportunities in various industries such as technology, healthcare, and natural resources."
        },
        {
          category: "Inclusive Society",
          details: "Canada is known for its welcoming and inclusive society, with policies that promote multiculturalism and diversity."
        },
        {
          category: "World-Class Education",
          details: "Canada has top-ranking universities and educational institutions, making it an attractive destination for students and researchers."
        },
        {
          category: "Beautiful Landscapes",
          details: "Canada boasts stunning natural landscapes, including mountains, lakes, and national parks, offering a high quality of life for outdoor enthusiasts."
        }
      ]
    },
    {
      country: "Australia",
      img: Aimg,
      advantages: [
        {
          category: "Robust Economy",
          details: "Australia has a stable and resilient economy with opportunities in sectors like mining, agriculture, and technology."
        },
        {
          category: "Quality Healthcare",
          details: "Australia has an efficient healthcare system, providing residents with access to high-quality medical services."
        },
        {
          category: "Skilled Migration Opportunities",
          details: "Australia has various skilled migration programs that attract professionals with in-demand skills."
        },
        {
          category: "Outdoor Lifestyle",
          details: "Australia offers a pleasant climate and a strong outdoor lifestyle. The country is known for its beautiful beaches, diverse landscapes, and recreational activities."
        },
        {
          category: "Multicultural Society",
          details: "Australia embraces cultural diversity, creating a vibrant and inclusive society that welcomes people from various backgrounds."
        }
      ]
    }
  ];

  return (
    <div className="container-fluid bg-light py-2 pb-5">
      <h1 className='d-flex justify-content-center fw-bold  vxeq' style={{letterSpacing:"2px"}}>ADVANTAGES</h1>
      {migrationAdvantages.map((countryInfo, index) => (
        <div className="card mb-3 mt-5 shadow mx-3 p-2  border-bottom border-primary border-4" style={{ border: "none" }} key={index}>
          <div className="row g-0">
            <div className="col-md-4 d-flex">
              <img src={countryInfo.img} className=" justify-content-center" alt={countryInfo.country}  style={{width:"100%"}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body mx-3">
                <h5 className="card-title fw-bold fs-3" style={{letterSpacing:"1px"}}>{countryInfo.country}</h5>
                {countryInfo.advantages.map((advantage, advIndex) => (
                  <p className="card-text" key={advIndex}>
                    <strong>{advantage.category}:</strong> {advantage.details}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
