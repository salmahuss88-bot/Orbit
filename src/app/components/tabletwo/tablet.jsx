'use client';

import React, { useRef } from 'react';
import CustomScrollbar from '../scroll/scroll';

const DataTableTwo = ({ 
  title = "", 
  columns = [], 
  data = [] 
}) => {
  const tableContainerRef = useRef(null);

  return (
    <div className="flex-1 text-lg max-w-full overflow-hidden w-full">
      <div className="bg-white rounded-2xl border border-[#E9ECEF] shadow-sm overflow-hidden flex flex-col relative h-[510px] w-full">
        
        <div className="p-4 md:p-6 flex flex-wrap justify-between items-center bg-white z-20 gap-3">
          <h3 className="font-bold text-[14px] md:text-[15px] text-[#1A1C21] truncate">{title}</h3>
          
          <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-black font-light">
            Showing 
            <span className="relative inline-flex items-center justify-center p-[1.2px] rounded-lg overflow-hidden" 
                  style={{ background: "linear-gradient(90deg, #14ADD6 0%, #384295 100%)" }}>
              <span className="bg-white rounded-[7px] px-3 py-1 flex items-center justify-center min-w-[32px]">
                <span className="font-bold text-[12px] md:text-[13px]" 
                      style={{ 
                        background: "linear-gradient(90deg, #14ADD6 0%, #384295 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>
                  {data.length}
                </span>
              </span>
            </span> 
            per page
          </div>
        </div>

        <div className="relative flex-grow overflow-hidden flex flex-col">
          <div 
            ref={tableContainerRef} 
            className="h-full overflow-y-auto overflow-x-auto custom-scrollbar-hide px-4 pr-8"
          >

            <table className="w-full text-center border-collapse min-w-[700px] md:min-w-full">
              <thead className="bg-white sticky top-0 z-10 text-[#515151] text-[10px] tracking-widest uppercase font-sans">
                <tr>
                  {columns.map((col, index) => (
                    <th key={index} className="px-4 md:px-6 py-4 font-bold whitespace-nowrap">
                      {col}
                    </th>  
                  ))}
                </tr>
              </thead>
              
              <tbody className="text-[13px] font-thin divide-y divide-[#D0D0D0]">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50/30 transition-colors">
                    {Object.values(row).map((value, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className="px-3 md:px-4 py-4 text-[#515151] whitespace-nowrap"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="absolute right-2 md:right-4 top-[15px] bottom-2 w-[6px] md:w-[9px] z-30 pointer-events-none">
            <div className="h-full pointer-events-auto">
              <CustomScrollbar containerRef={tableContainerRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableTwo;