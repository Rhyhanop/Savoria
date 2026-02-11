
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 drop-shadow-lg">
          Experience Culinary Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Where every dish is a masterpiece, crafted with passion and the finest ingredients.
        </p>
        <a
          href="#menu"
          className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300 text-lg"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
