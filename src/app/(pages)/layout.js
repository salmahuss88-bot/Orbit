"use client";
import React, { useState } from "react";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";
import { HiMenuAlt2 } from "react-icons/hi"; 
import { IoClose } from "react-icons/io5"; 

export default function MainLayout({ children }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] relative">
      
      <div className={`
        fixed inset-y-0 left-0 z-[60] transition-transform duration-300 transform 
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[55] lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="p-4 lg:p-8 lg:pb-0 flex items-start gap-2">
  
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiMenuAlt2 size={28} />
          </button>
          
          <div className="flex-1">
            <Header activePageName={activeItem} />
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}