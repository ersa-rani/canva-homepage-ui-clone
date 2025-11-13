
import React from 'react';

const FooterDecorations: React.FC = () => {
  return (
    // Container for all decorative elements, positioned at the bottom.
    // pointer-events-none allows clicks to pass through these elements.
    <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-0">
      <div className="container mx-auto h-full relative">
        {/* T Block */}
        <div className="absolute bottom-8 left-4 sm:left-12 md:left-24 transform -rotate-12">
          <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-lg w-14 h-14 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">T</span>
          </div>
        </div>

        {/* Pink Letter A */}
        <div className="absolute bottom-16 left-1/4 transform -translate-x-1/2 rotate-12 hidden md:block">
          <svg width="60" height="60" viewBox="0 0 81 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.5 0.999995L80.5 90.5H0.5L40.5 0.999995Z" fill="#FF4E8C"/>
          </svg>
        </div>
        
        {/* Blue Circle */}
        <div className="absolute bottom-5 left-1/3 transform -translate-x-1/2 hidden lg:block">
            <div className="w-10 h-10 rounded-full bg-[#3f51b5] opacity-80"></div>
        </div>

        {/* Purple abstract shape */}
        <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 -rotate-12 hidden md:block">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#9C27B0" fillOpacity="0.8"/>
                <path d="M50 20L80 50L50 80L20 50L50 20Z" fill="#B35FD2"/>
            </svg>
        </div>

        {/* Graduation Cap */}
        <div className="absolute bottom-5 right-4 sm:right-12 md:right-24 transform rotate-12">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5L5 30L50 55L95 30L50 5Z" fill="#A020F0"/>
                <path d="M10 33V65L50 85V53L10 33Z" fill="#8A2BE2"/>
                <rect x="85" y="30" width="10" height="20" fill="#FFD700"/>
                <line x1="90" y1="50" x2="90" y2="60" stroke="#FFD700" strokeWidth="4"/>
                <line x1="85" y1="60" x2="95" y2="60" stroke="#FFD700" strokeWidth="4"/>
            </svg>
        </div>

      </div>
    </div>
  );
};

export default FooterDecorations;
