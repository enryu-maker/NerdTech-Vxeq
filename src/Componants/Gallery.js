// import React from 'react';
// import img1 from '../Images/img1.jpeg';
// import img2 from '../Images/img2.jpeg';
// import img3 from '../Images/img3.jpeg';
// import img4 from '../Images/img4.jpeg';
// import img5 from '../Images/img5.jpeg';
// import './Gallery.css';

// export default function Gallery() {
//   const pics = [img1, img2, img3];
//   const pics1 = [img4, img5];


//   var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Gallery')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Gallery')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('<strong>FrontEnd Developer</strong>')
//     .pauseFor(2500)
//     .start();
//   return (
//     <>
//     <div className='bg-light pt-3 pb-5'>
//     <div className="container-fluid pt-3">
//       {/* <h1 className="text-center fw-bold py-5 pt-3 my-4" style={{fontSize:"60px"}}>Gallery</h1> */}

//       <div id="app"></div>



//       <div className="row justify-content-center">
//         {pics.map((item, index) => (
//           <div key={index} className="content col-md-4 col-sm-12 mb-5 pt-5">
//             <div className="content-overlay"></div>
//             <img className="content-image" src={item} alt="" style={{ height: '320px', objectFit: 'cover' }} />
//             <div className="content-details fadeIn-bottom">
//               <h3 className="content-title fw-bold">VXEQ INFRA FACILITIES PVT LTD</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="container-fluid pb-5">
//       <div className="row justify-content-center">
//         {pics1.map((item, index) => (
//           <div key={index} className="content col-md-4 col-sm-12 mb-5 pt-5">
//             <div className="content-overlay"></div>
//             <img className="content-image" src={item} alt="" style={{ height: '320px', objectFit: 'cover' }} />
//             <div className="content-details fadeIn-bottom">
//               <h3 className="content-title fw-bold">VXEQ INFRA FACILITIES PVT LTD</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </>
    
    
//   );
// }



import React, { useEffect } from 'react';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpeg';
import img5 from '../Images/img5.jpeg';
import Typewriter from 'typewriter-effect';
import './Gallery.css';

export default function Gallery() {
  const pics = [img1, img2, img3];
  const pics1 = [img4, img5];

  

  return (
    <div className='bg-light pt-3 pb-5'>
      <div className="container-fluid pt-3">
        <div id="typewriter" className="typewriter"></div>
<h1 className='text-center display-5 fw-bold  vxeq py-4' style={{letterSpacing:"3px"}}>Gallery</h1>
        <div className="row justify-content-center">
          {pics.map((item, index) => (
            <div key={index} className="content col-md-4 col-sm-12 mb-5 pt-5">
              <div className="content-overlay"></div>
              <img className="content-image" src={item} alt="" style={{ height: '320px', objectFit: 'cover' }} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title fw-bold">VXEQ INFRA FACILITIES PVT LTD</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid pb-5">
        <div className="row justify-content-center">
          {pics1.map((item, index) => (
            <div key={index} className="content col-md-4 col-sm-12 mb-5 pt-5">
              <div className="content-overlay"></div>
              <img className="content-image" src={item} alt="" style={{ height: '320px', objectFit: 'cover' }} />
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title fw-bold">VXEQ INFRA FACILITIES PVT LTD</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
