import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Achivements from './Pages/Achivements';
import ContactUs from './Pages/ContactUs';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Services from './Pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/achievement" element={<Achivements/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
