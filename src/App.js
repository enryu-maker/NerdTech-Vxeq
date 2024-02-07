import Navbar from './Componants/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Routes,Route} from 'react-router-dom'
import Home from './Componants/Home';
import Product from './Componants/Product';
import Migration from './Componants/Migration'
import About from './Componants/About'
import Gallery from './Componants/Gallery';
import Footer from './Componants/Footer';
import Consultant from './Componants/Consultant';


function App() {
  return (
    <div style={{fontFamily:"poppins"}} className='text-justify'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/mig' element={<Migration/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/consultant' element={<Consultant/>}/>
      
    </Routes>
   
    <Footer/>
    
    </div>
  );
}

export default App;
