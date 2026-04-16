"use client";
import React, { useState } from "react";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Sidebar from "@/app/components/layout/Sidebar";

export default function MainLayout({ children }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 flex flex-col">
        <header className="p-8 pb-0">
          <Header activePageName={activeItem} />
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
