
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center px-4 flex flex-col items-center pt-24 pb-12">
      {/* Main heading */}
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight max-w-4xl">
        A new era
        <br />
        of imagination
      </h1>
      
      {/* Subheading */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
        Discover a whole new world of skills and tools designed to put your imagination to work.
      </p>
      
      {/* Call-to-action buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto text-base">
          Start designing for free
        </button>
        <button className="bg-black bg-opacity-25 text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-40 transition-all duration-300 w-full sm:w-auto text-base">
          Explore our launches
        </button>
      </div>
    </div>
  );
};

export default Hero;
