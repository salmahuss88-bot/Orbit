"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretLeftBold, PiCalendarBlankLight, PiCaretDownLight } from "react-icons/pi";

const TrainingRequestPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const dateInputRef = useRef(null); 

  const handleSaveAndSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      description: e.target.elements[0].value || "Staff Health and Safety Training",
      date: dateInputRef.current?.value || new Date().toLocaleDateString('en-GB'),
      type: "Team",
      duration: "3 days",
      mode: "Physical",
      status: "Inprogress"
    };

    const existingData = JSON.parse(localStorage.getItem('trainings') || '[]');
    const updatedData = [newRequest, ...existingData];
    localStorage.setItem('trainings', JSON.stringify(updatedData));
    setShowModal(true);
  };

  const handleModalOk = () => {
    router.push('/capacity-building/details');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans relative">
      <button onClick={() => router.back()} className="flex items-center text-[#3BA8F6] mb-8 font-medium">
        <PiCaretLeftBold size={18} className="mr-1" />
        <span className="text-lg">Back</span>
      </button>

      <div className="bg-white rounded-[32px] shadow-sm p-10 border border-gray-100 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-10">Training Request</h1>
        <form className="space-y-8" onSubmit={handleSaveAndSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Training description</label>
              <input type="text" placeholder="Enter description" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Training type</label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-xl appearance-none text-gray-400">
                  <option>Select type</option>
                  <option>Team</option>
                  <option>Individual</option>
                </select>
                <PiCaretDownLight className="absolute right-3 top-4 text-gray-400" size={18} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Training duration</label>
              <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                <input type="text" className="w-1/2 p-3 focus:outline-none border-r border-gray-200" />
                <div className="relative w-1/2 bg-gray-50/50 px-3">
                  <select className="bg-transparent appearance-none w-full py-3 text-gray-400 focus:outline-none"><option>Days</option><option>Weeks</option></select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Training date</label>
              <div className="relative">
                <input ref={dateInputRef} type="date" className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none text-gray-700" style={{ colorScheme: 'light' }} />
                <PiCalendarBlankLight className="absolute right-3 top-4 text-gray-400 cursor-pointer" size={18} onClick={() => dateInputRef.current?.showPicker()} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Training mode</label>
              <select className="w-full p-3 border border-gray-200 rounded-xl appearance-none text-gray-400">
                <option>Select mode</option><option>Physical</option><option>Online</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Staff to be trained</label>
              <select className="w-full p-3 border border-gray-200 rounded-xl appearance-none text-gray-400">
                <option>Select names</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-10">
            <button type="submit" className="bg-gradient-to-r from-[#2B95CE] to-[#2B60B4] text-white px-10 py-3 rounded-xl font-medium">Save and Submit</button>
            <button type="button" className="border border-blue-600 text-blue-600 px-12 py-3 rounded-xl font-medium">Save</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[40px] p-12 flex flex-col items-center text-center max-w-sm w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="mb-6">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#22C55E" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Congratulations</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">Your training request has been submitted successfully.</p>
            <button onClick={handleModalOk} className="bg-gradient-to-r from-[#3BA8F6] to-[#2B60B4] text-white w-full py-4 rounded-2xl font-bold">Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingRequestPage;