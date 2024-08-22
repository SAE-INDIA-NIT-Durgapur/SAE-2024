import React, { useEffect } from 'react';
import HeaderImg from './components/HeaderImg/HeaderImg';
import Speakers from './components/Speakers/Speakers';
import Organisers from './components/Organisers/Organisers';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Navbar from './components/Navbar/Navbar';  
import About from './components/About/About';

const TedX = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeaderImg />
      <About />
      <div className="max-w-screen mx-auto p-4">
        <ImageCarousel />
      </div>
      <div className="max-w-screen mx-auto p-4">
        {/* Underlined with red */}
        <h1 className="text-5xl font-bold text-custom-red text-center underline-red">Speakers</h1>
        <Speakers />
        {/* Underlined with red */}
        <h1 className="text-5xl font-bold text-custom-red text-center mb-6 underline-red">Organisers</h1>
        <Organisers />
      </div>
    </div>
  );
};

export default TedX;
