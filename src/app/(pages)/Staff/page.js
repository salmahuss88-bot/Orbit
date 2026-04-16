'use client';

import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'; 
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md';
import Pagination from '../../components/pagenumber/pagenumber';
import DataTableTwo from '../../components/tabletwo/tablet'; 
import SuccessModal from '../../components/congratulation/Congrat'; 

const StaffPage = () => {
  const [isStaffMenuOpen, setIsStaffMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Staff');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const staffColumns = ["Staff ID", "Full Name", "Department", "Position", "Join Date", "Status"];
  const staffData = [
    { id: 'STF-001', name: 'Hebah Abdullah', dept: 'Development', role: 'Front-end Engineer', date: '12/01/2024', status: 'Active' },
    { id: 'STF-002', name: 'Williams Achegbani', dept: 'Operations', role: 'COO', date: '05/11/2022', status: 'Active' },
    { id: 'STF-003', name: 'Ahmed Khalid', dept: 'Design', role: 'UI/UX Designer', date: '20/02/2024', status: 'On Leave' },
    { id: 'STF-004', name: 'Sara Mansour', dept: 'HR', role: 'HR Manager', date: '15/03/2023', status: 'Active' },
    { id: 'STF-005', name: 'Fahad Al-Otaibi', dept: 'Finance', role: 'Accountant', date: '01/01/2023', status: 'Remote' },
    { id: 'STF-002', name: 'Williams Achegbani', dept: 'Operations', role: 'COO', date: '05/11/2022', status: 'Active' },
    { id: 'STF-003', name: 'Ahmed Khalid', dept: 'Design', role: 'UI/UX Designer', date: '20/02/2024', status: 'On Leave' },
    { id: 'STF-004', name: 'Sara Mansour', dept: 'HR', role: 'HR Manager', date: '15/03/2023', status: 'Active' },
    { id: 'STF-005', name: 'Fahad Al-Otaibi', dept: 'Finance', role: 'Accountant', date: '01/01/2023', status: 'Remote' },
  ];

  const toggleMenu = () => setIsStaffMenuOpen(!isStaffMenuOpen);

  return (
    <div className="flex-grow p-4 md:p-8 bg-[#F8F9FA] min-h-screen relative">
      
      <div className="mt-0 w-full max-w-full">
        <button 
          onClick={() => setCurrentPage(1)} 
          className="font-normal mb-6 md:mb-8 flex items-center gap-2 text-base md:text-lg hover:opacity-80 transition-opacity bg-gradient-to-r from-[#2485C1] to-[#20638b] bg-clip-text text-transparent"
        >
          <IoIosArrowBack size={20} className="text-[#2485C1]" /> 
          Back
        </button>
        
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center mb-8 gap-6 md:gap-8 bg-white p-5 md:p-7 rounded-3xl border border-[#E9ECEF] shadow-sm w-full">
            
            <div className="relative flex-grow lg:max-w-[40%]">
                <label className="absolute -top-5 left-0 text-[9px] md:text-[10px] font-extrabold text-[#707E94] uppercase tracking-tight">
                    Quick search a staff member
                </label>
                <div className="relative text-[#A0AEC0]">
                    <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2" size={20} />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name or ID..." 
                        className="w-full pl-11 pr-4 py-3 bg-[#FBFBFB] border border-[#E9ECEF] rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#14ADD6] transition-all" 
                    />
                </div>
            </div>

            <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center px-2 lg:px-10 border-y lg:border-y-0 lg:border-x border-[#E9ECEF] py-4 lg:py-0">
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-black text-[#1A1C21] leading-none">
                      {staffData.length}
                  </span>
                  <span className="text-[9px] md:text-[10px] text-[#707E94] font-bold uppercase tracking-wider whitespace-nowrap mt-1">
                      Total employees
                  </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 flex-grow justify-end">
                <div className="relative flex-grow sm:flex-none sm:min-w-[180px]">
                    <label className="absolute -top-5 left-0 text-[9px] md:text-[10px] font-extrabold text-[#707E94] uppercase tracking-tight">
                        Filter by Dept
                    </label>
                    <div 
                      onClick={toggleMenu}
                      className="w-full px-4 py-3 bg-[#FBFBFB] border border-[#E9ECEF] rounded-xl text-sm flex justify-between items-center text-[#707E94] cursor-pointer hover:border-[#14ADD6] transition-colors"
                    >
                        <span className="truncate">{selectedFilter}</span>
                        <MdKeyboardArrowDown className={`transition-transform duration-300 ${isStaffMenuOpen ? 'rotate-180' : ''}`} size={20} />
                    </div>
                </div>


                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-sm md:text-base font-medium shadow-md hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
                    style={{ background: "linear-gradient(90deg, #14ADD6 0%, #384295 100%)" }}
                >
                    Add Employee
                </button>
            </div>
        </div>

        <DataTableTwo 
          title="Staff Management Directory"
          columns={staffColumns}
          data={staffData}
        />

        <div className="mt-6 md:mt-8">
            <Pagination />
        </div>
      </div>


      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Success!"
        message="The new employee has been added to the directory successfully."
        buttonText="Great"
      />

      <style jsx global>{`
        .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default StaffPage;

// final update check