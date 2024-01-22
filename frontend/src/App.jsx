import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePages";
import Egitimler from "./pages/Egitimler";
import GelistiriciTestler from "./pages/GelistiriciTestler";
import AuthPage from "./pages/AuthPage";
import BizeKatil from "./pages/BizeKatil";
import WebProgramlamaTestiPage from "./pages/WebProgramlamaTestiPage"; // Ekledik
import MobilAppTestiPage from "./pages/MobilAppTestiPage";
import OyunGelistirmeTestiPage from "./pages/OyunGelistirmeTestiPage";
import VeriBilimiTestiPage from "./pages/VeriBilimiTestiPage";
import VideoAcilma from './pages/VideoAcilma';
import Wdersler from './pages/Wdersler';
import Mdersler from './pages/Mdersler';
import Vdersler from './pages/Vdersler';
import Odersler from './pages/Odersler';

import './App.css';



function App() {

  return (
    <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/Egitimler' element={<Egitimler/>} />
     <Route path='/GelistiriciTestler' element={<GelistiriciTestler name={"Deneme"}/>} />
     <Route path='/AuthPage' element={<AuthPage/>} />
     <Route path='/BizeKatil' element={<BizeKatil/>} />
     <Route path='/WebProgramlamaTestiPage' element={<WebProgramlamaTestiPage />} /> {/* Ekledik */}
     <Route path='/MobilAppTestiPage' element={<MobilAppTestiPage />} />
     <Route path='/OyunGelistirmeTestiPage' element={<OyunGelistirmeTestiPage />} />
     <Route path='/VeriBilimiTestiPage' element={<VeriBilimiTestiPage />} />
     <Route path='/VideoAcilma' element={<VideoAcilma />} />
     <Route path='/Wdersler' element={<Wdersler/>} />
     <Route path='/Mdersler' element={<Mdersler/>} />
     <Route path='/Vdersler' element={<Vdersler/>} />
     <Route path='/Odersler' element={<Odersler/>} />

     
     
     
     
    </Routes>
   
   
  )
}

export default App
