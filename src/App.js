import React from 'react';
import './App.css';
import AboutUsComponent from './components/AboutUsComponent/AboutUsComponent';
import ContactUsComponent from './components/ContactUsComponent/ContactUsComponent';
import Footer from './components/Footer/Footer';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PackagesComponent from './components/PackagesComponent/PackagesComponent';
import PatreonComponent from './components/PatreonComponent/PatreonComponent';
import Slider from './components/Slider/Slider';
import StoreComponent from './components/StoreComponent/StoreComponent';
import VideosComponent from './components/VideosComponent/VideosComponent';

function App() {
  return (
    <div className='layout'>
      <HeaderComponent />
      <Slider />
      <AboutUsComponent />
      <PackagesComponent />
      <VideosComponent />
      <StoreComponent />
      <PatreonComponent />
      <ContactUsComponent />
      <Footer />
    </div>
  );
}


export default App;
