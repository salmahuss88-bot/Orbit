'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import DataTable from '../../components/table/table';
import Pagination from '../../components/pagenumber/pagenumber';
import Link from 'next/link';

const StaffPage = () => {
  const [isStaffMenuOpen, setIsStaffMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All staff");

  const tableColumns = [
    "S/N", "First Name", "Last Name", "Gender",
    "Staff ID", "Phone Number", "Role", "Designation"
  ];

  const staffData = [
    { sn: "01", firstName: "Sandra", lastName: "Williams", gender: "Female", staffId: "0246AHR", phone: "08130000000", role: "Admin", designation: "Human Resources" },
    { sn: "02", firstName: "Abubakar", lastName: "Ibrahim", gender: "Male", staffId: "0251ITO", phone: "07062000033", role: "I.T", designation: "Operations" },
    { sn: "03", firstName: "Ikechukwu", lastName: "Ugbonna", gender: "Male", staffId: "0340ITO", phone: "08130000000", role: "I.T", designation: "Operations" },
    { sn: "04", firstName: "Joshua", lastName: "Adewale", gender: "Male", staffId: "0146APM", phone: "07038126632", role: "Admin", designation: "Project Management" },
    { sn: "05", firstName: "Fatimah", lastName: "Nasir", gender: "Female", staffId: "0226ACS", phone: "08130000000", role: "Admin", designation: "Customer Service" },
    { sn: "06", firstName: "Hauwa", lastName: "Lateef", gender: "Female", staffId: "0124HR", phone: "08130000000", role: "I.T", designation: "Human Resources" },
    { sn: "07", firstName: "Sandra", lastName: "Williams", gender: "Female", staffId: "0246AH", phone: "08130000000", role: "Admin", designation: "Human Resources" },
    { sn: "08", firstName: "Sandra", lastName: "Williams", gender: "Female", staffId: "0246AH", phone: "08130000000", role: "None", designation: "Cleaning" },
    { sn: "09", firstName: "Sandra", lastName: "Williams", gender: "Female", staffId: "0246PMO", phone: "08130000000", role: "P.M", designation: "Operations" },
    { sn: "10", firstName: "Sunday", lastName: "Alison", gender: "Male", staffId: "0246AH", phone: "08130000000", role: "None", designation: "Security" },
  ];

  const filteredData = staffData.filter((staff) => {
    const matchesSearch =
      staff.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.staffId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterRole === "All staff" ||
      (filterRole === "Admin staff" && staff.role === "Admin") ||
      (filterRole === "I.T staff" && staff.role === "I.T") ||
      (filterRole === "Human Resources staff" && staff.designation === "Human Resources");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full flex flex-col items-center pt-0 gap-6">

      <div className="flex items-center justify-between bg-white rounded-[20px] w-[1060px] h-[130px] px-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 mt-4">
        <div className="w-[340px] flex flex-col gap-2">
          <label className="text-black text-sm font-semibold ml-1">Quick search a staff</label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter search word"
              className="w-full h-[48px] pl-4 pr-10 border border-[#E2E8F0] rounded-xl outline-none focus:border-[#3182CE] text-sm text-gray-700 placeholder:text-[#A0AEC0]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0] w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <span className="text-[32px] font-bold text-[#333] leading-none">{filteredData.length}</span>
          <span className="text-[12px] text-gray-500 font-medium whitespace-nowrap mt-1">Total number of staff</span>
        </div>

        <div className="flex items-end gap-6">
          <div className="flex flex-col gap-2 w-[160px] relative">
            <label className="text-black text-sm font-semibold ml-1">Filter staff</label>
            <div className="relative cursor-pointer" onClick={() => setIsStaffMenuOpen(!isStaffMenuOpen)}>
              <div className="flex items-center justify-between w-full h-[48px] bg-[#F2F7FF] rounded-xl px-4 text-sm text-[#A3A3A3] font-medium">
                <span>{filterRole}</span>
                <ChevronDown className="text-[#A0AEC0] w-4 h-4" />
              </div>
              {isStaffMenuOpen && (
                <div className="absolute right-0 top-full mt-4 w-45 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <ul className="text-black text-[12px] font-natural">
                    {["All staff", "Admin staff", "I.T staff", "Human Resources staff"].map((option) => (
                      <li
                        key={option}
                        className="px-6 py-2 hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          setFilterRole(option);
                          setIsStaffMenuOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <Link href="/Staff/new">
            <button className="h-[48px] px-8 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white rounded-xl font-semibold text-sm transition-all shadow-md">
              Add New Staff
            </button>
          </Link>
        </div>
      </div>


      <div className="w-[1060px] flex flex-col items-end gap-4">
        <DataTable
          title="All Staff"
          columns={tableColumns}
          data={filteredData}
        />

   
        <div className="w-full flex justify-left">
          <Pagination />
        </div>
      </div>

    </div>
  );
};

export default StaffPage;
