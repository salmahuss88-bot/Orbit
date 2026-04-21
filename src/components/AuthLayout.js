import React from 'react';

const AuthLayout = ({ children, imageSrc }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      <div className="hidden md:block relative overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt="Auth Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="bg-white flex flex-col relative px-6 py-8 md:px-16 md:py-12 font-sans text-left" dir="ltr">
        
        <div className="flex justify-between items-center mb-16 md:mb-20">
          <div className="flex items-center gap-3">
             <img src="/logo.png" alt="Orbit Logo" className="h-10 w-auto" />            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1A1A1A]">Orbit</span>
              <span className="text-xs text-gray-500 -mt-1">ERP System</span>
            </div>
          </div>
          
          <button className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition">
            Sign Up
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          {children}
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;