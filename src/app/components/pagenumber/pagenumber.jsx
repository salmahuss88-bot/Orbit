'use client'; 

import React, { useState } from 'react';

const Pagination = () => {
  const [activePageNum, setActivePageNum] = useState(1);

  return (
    <div className="p-4 md:p-8 flex flex-wrap justify-start items-center gap-1.5 md:gap-2.5">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setActivePageNum(num)}
          className={`w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl text-sm md:text-base font-normal transition-all border ${
            activePageNum === num 
              ? "bg-gradient-to-b from-[#14ADD6] to-[#384295] text-white border-transparent shadow-lg" 
              : "bg-white text-[#272525] border-gray-300 hover:border-gray-600"
          }`}
        >
          {num}
        </button>
      ))}

      <button className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white border border-gray-300 text-[#272525] text-sm md:text-base font-normal hover:bg-gray-50 transition-all">
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;