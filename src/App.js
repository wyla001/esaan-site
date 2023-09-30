import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/Navbar.js'
import Footer from './components/footer/Footer.js'
import Home from './pages/Home.js'
import Menu from './pages/Menu.js'
import Info from './pages/Info.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'> 
    <Navigation />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
