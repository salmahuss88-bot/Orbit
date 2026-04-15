"use client";
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FiChevronDown, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isStaffMenuOpen, setIsStaffMenuOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        .active-gradient-text {
          background: linear-gradient(to bottom, #14ADD6, #384295);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>

      <div className="flex justify-end items-center mb-10 font-sans">
        
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <IoMdNotifications size={24} className="text-black" />
          </div>
          
          <div className="flex items-center gap-3 relative">
            <img 
              src="/Profilepic.svg" 
              className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => { setIsProfileMenuOpen(!isProfileMenuOpen); setIsStaffMenuOpen(false); }}
            />
            
            <div className="text-left hidden md:block">
              <p className="text-[14px] text-black leading-none">Otor John</p>
              <p className="text-[12px] text-black opacity-50 font-normal mt-1">HR Office</p>
            </div>

            <FiChevronDown 
              className={`text-black text-lg cursor-pointer transition-transform duration-300 ${isStaffMenuOpen ? 'rotate-180' : ''}`} 
              onClick={() => { setIsStaffMenuOpen(!isStaffMenuOpen); setIsProfileMenuOpen(false); }}
            />

            {isProfileMenuOpen && (
               <div className="absolute right-0 top-full mt-4 w-43 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 z-50">
                  <ul className="text-black text-[12px] font-natural">
                    <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                      <FiUser /> Profile
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                      <FiSettings /> Settings
                    </li>
                    <li className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-center gap-3 border-t border-gray-50">
                      <FiLogOut /> Logout
                    </li>
                  </ul>
               </div>
            )}

            {isStaffMenuOpen && (
               <div className="absolute right-0 top-full mt-4 w-45 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <ul className="text-black text-[12px] font-natural">
                    <li className="px-6 py-2 hover:bg-gray-50 cursor-pointer">All staff</li>
                    <li className="px-6 py-2 hover:bg-gray-50 cursor-pointer">Admin staff</li>
                    <li className="px-6 py-2 hover:bg-gray-50 cursor-pointer">I.T staff</li>
                    <li className="px-6 py-2 hover:bg-gray-50 cursor-pointer">Human Resources staff</li>
                  </ul>
               </div>
            )}
          </div>
        </div>
      </div>
    </> 
  );
}