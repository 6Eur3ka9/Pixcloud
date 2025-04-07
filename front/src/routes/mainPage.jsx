import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import familyImage from '../assets/family.png';

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20">
        <div className="flex-1 flex justify-center lg:justify-start items-center lg:items-start">
          <img 
            src={familyImage} 
            alt="Family" 
            className="w-80 h-auto lg:w-96 lg:h-auto"
          />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:ml-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Stocker vos souvenir grâce à Pixcloud
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Stocker gratuitement jusqu'à 100 images.
          </p>
          <button 
            className="bg-[rgba(255,6,10,0.73)] text-white border-none py-3 px-6 rounded cursor-pointer font-semibold transform transition-transform duration-200 hover:scale-105"
          >
            commencer dès maintenant
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;