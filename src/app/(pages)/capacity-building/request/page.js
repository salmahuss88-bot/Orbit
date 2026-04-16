"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretLeftBold, PiCalendarBlankLight, PiCaretDownLight } from "react-icons/pi";

const TrainingRequestPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const dateInputRef = useRef(null);

  const [formData, setFormData] = useState({
    description: "",
    type: "",
    durationValue: "",
    durationUnit: "",
    date: "",
    mode: "",
    staff: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveAndSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now(),
      description: formData.description,
      date: formData.date || new Date().toLocaleDateString('en-GB'),
      type: formData.type,
      duration: `${formData.durationValue} ${formData.durationUnit}`,
      mode: formData.mode,
      status: "Inprogress"
    };

    const existingData = JSON.parse(localStorage.getItem('trainings') || '[]');
    localStorage.setItem('trainings', JSON.stringify([newRequest, ...existingData]));
    setShowModal(true);
  };

  const CustomSelect = ({ label, name, options, placeholder, value }) => (
    <div className="space-y-2">
      <label className="text-sm  text-blak">{label}</label>
      <div className="relative">
        <select 
          name={name}
          value={value}
          required
          onChange={handleInputChange}
          className={`w-full p-3.5 border border-gray-100 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-[#14ADD6]/20 bg-gray-50/30 transition-all
            ${value ? 'text-gray-900' : 'text-gray-400'}`}
        >
          <option value="">{placeholder}</option>
          {options.map(opt => <option key={opt} value={opt} className="text-gray-900">{opt}</option>)}
        </select>
        <PiCaretDownLight className="absolute right-3 top-4 text-gray-400 pointer-events-none" size={18} />
      </div>
    </div>
  );

  return (
    <div className="p-0 min-h-screen">
      {/* ز
      <button onClick={() => router.back()} className="flex items-center text-[#384295] mb-8 font-bold hover:underline underline-offset-4 transition-all">
        <PiCaretLeftBold size={18} className="mr-1" />
        <span className="text-lg">Back</span>
      </button> */}

      <div className="bg-white rounded-[32px] p-10 border border-gray-100 max-w-7xl mx-auto shadow-none">
        <h1 className="text-2xl font-extrabold text-black mb-10 tracking-tight">Training Request</h1>
        
        <form className="space-y-8" onSubmit={handleSaveAndSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* وصف التدريب */}
            <div className="space-y-2">
              <label className="text-sm  text-black">Training description</label>
              <input 
                name="description"
                type="text" 
                placeholder="Enter description" 
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3.5 border text-center text-sm border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14ADD6]/20 bg-gray-50/30 text-gray-900 placeholder:text-gray-400 transition-all" 
                required 
              />
            </div>

            {/* النوع */}
            <CustomSelect 
              label="Training type" 
              name="type" 
              placeholder="Select type" 
              value={formData.type}
              options={["Team", "Individual"]} 
            />

            {/* المدة */}
            <div className="space-y-2">
              <label className="text-sm  text-blak">Training duration</label>
              <div className="flex border border-gray-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#14ADD6]/20 bg-gray-50/30">
                <input 
                  name="durationValue"
                  type="number" 
                  value={formData.durationValue}
                  onChange={handleInputChange}
                  className="w-1/2 p-3.5 focus:outline-none border-r border-gray-100 bg-transparent text-gray-900 placeholder:text-gray-400 font-mono" 
                  required
                />
                <div className="relative w-1/2">
                  <select 
                    name="durationUnit"
                    value={formData.durationUnit}
                    onChange={handleInputChange}
                    className={`bg-transparent appearance-none w-full py-3.5 px-3 outline-none transition-colors
                      ${formData.durationUnit ? 'text-gray-900' : 'text-gray-400'}`}
                    required
                  >
                    <option value="">Select option</option>
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                  </select>
                  <PiCaretDownLight className="absolute right-3 top-4 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* التاريخ */}
            <div className="space-y-2">
              <label className="text-sm  text-black">Training date</label>
              <div className="relative">
                <input 
                  ref={dateInputRef} 
                  name="date"
                  type="date" 
                  value={formData.date}
                  onChange={handleInputChange}
                  className={`w-full p-3.5 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14ADD6]/20 bg-gray-50/30 transition-all
                    ${formData.date ? 'text-gray-900' : 'text-gray-400'}`} 
                  style={{ colorScheme: 'light' }} 
                  required
                />
                
              </div>
            </div>

            {/* طريقة التدريب */}
            <CustomSelect 
              label="Training mode" 
              name="mode" 
              placeholder="Select mode" 
              value={formData.mode}
              options={["Physical", "Online"]} 
            />

            {/* الموظفون */}
            <CustomSelect 
              label="Staff to be trained" 
              name="staff" 
              placeholder="Select names" 
              value={formData.staff}
              options={["Ahmed Ali", "Sarah Smith", "John Doe"]} 
            />
          </div>

          <div className="flex gap-4 pt-10">
            <button type="submit" className="btn-primary-gradient px-12 py-3.5">
              Save and Submit
            </button>
            
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="border-2 border-[#384295] text-[#384295] px-12 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[40px] p-12 flex flex-col items-center text-center max-w-sm w-full shadow-none border border-gray-100">
            <div className="mb-6 bg-green-50 p-4 rounded-full">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#22C55E" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-black mb-2">Congratulations</h2>
            <p className="text-gray-500 mb-8 font-medium">Your training request has been submitted successfully.</p>
            <button 
              onClick={() => router.push('/capacity-building')} 
              className="btn-primary-gradient w-full py-4 text-base"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingRequestPage;