import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Back = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} // تم تغييرها لتعمل كزر رجوع حقيقي، أو اتركها كما كانت setCurrentPage
      className="font-normal flex items-center gap-1.5 md:gap-2 text-base md:text-lg hover:opacity-80 transition-opacity bg-gradient-to-r from-[#2485C1] to-[#20638b] bg-clip-text text-transparent"
      style={{
        position: 'absolute', // التغيير هنا: absolute بدلاً من fixed
        top: '120px',
        left: '310px',
        zIndex: 10, // لا نحتاج لـ 9999 طالما أنه ليس عائماً
        margin: 0
      }}
    >
      <IoIosArrowBack className="text-[#2485C1] w-[18px] h-[18px] md:w-[20px] md:h-[20px]" /> 
      Back
    </button>
  );
};

export default Back;