"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretDownLight } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import CongratulationsModal from '@/app/components/congratulation/Congrat';

const TrainingRequestPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [lastCreatedId, setLastCreatedId] = useState(null);

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
    const newId = Date.now();

    const newRequest = {
      id: newId,
      description: formData.description,
      date: formData.date || new Date().toLocaleDateString('en-GB'),
      type: formData.type,
      duration: `${formData.durationValue} ${formData.durationUnit}`,
      mode: formData.mode,
      staff: formData.staff,
      status: "In progress"
    };

    const existingData = JSON.parse(localStorage.getItem('trainings') || '[]');
    localStorage.setItem('trainings', JSON.stringify([newRequest, ...existingData]));

    setLastCreatedId(newId);
    setShowModal(true);
  };

  const CustomSelect = ({ label, name, options, placeholder, value }) => (
    <div className="space-y-2">
      <label className="text-sm text-black">{label}</label>
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
      <div className="bg-white rounded-[32px] p-10 border border-gray-100 max-w-7xl mx-auto shadow-none">
        <h1 className="text-2xl font-extrabold text-black mb-10 tracking-tight">Training Request</h1>
        <form className="space-y-8" onSubmit={handleSaveAndSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Training Description */}
            <div className="space-y-2">
              <label className="text-sm text-black">Training description</label>
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full  p-3.5 border text-sm border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14ADD6]/20 bg-gray-50/30 text-gray-900 placeholder:text-gray-400 transition-all"
                required
              />
            </div>

            {/* Training Type */}
            <CustomSelect
              label="Training type"
              name="type"
              placeholder="Select type"
              value={formData.type}
              options={["Team", "Individual"]}
            />

            {/* Training Duration */}
            <div className="space-y-2">
              <label className="text-sm text-black">Training duration</label>
              <div className="flex border border-gray-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#14ADD6]/20 bg-gray-50/30">
                <input
                  name="durationValue"
                  type="number"
                  value={formData.durationValue}
                  onChange={handleInputChange}
                  className="w-1/2 p-3.5 focus:outline-none border-r border-gray-100 bg-transparent text-gray-900 placeholder:text-gray-400"
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
                    <option value="Months">Months</option>
                  </select>
                  <PiCaretDownLight className="absolute right-3 top-4 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Training Date */}
            <div className="space-y-2">
              <label className="text-sm text-black">Training date</label>
              <input
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

            {/* Training Mode */}
            <CustomSelect
              label="Training mode"
              name="mode"
              placeholder="Select mode"
              value={formData.mode}
              options={["Physical", "Online"]}
            />

            {/* Staff */}
            <CustomSelect
              label="Staff to be trained"
              name="staff"
              placeholder="Select names"
              value={formData.staff}
              options={["Ahmed Ali", "Sarah Smith", "John Doe"]}
            />
          </div>

          <div className="flex gap-4 pt-10">
            <button type="submit" className="btn-primary-gradient w-[250px] h-[46px]">
              Save and Submit
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="w-[142px] h-[46px] border-2 border-[#384295] text-[#384295] rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <CongratulationsModal
          isOpen={showModal}
          onClose={() => router.push(`/capacity-building/details?id=${lastCreatedId}`)}
          title="Congratulations"
          message="Your training request has been submitted successfully."
          buttonText="Ok"
        />
      )}
    </div>
  );
};

export default TrainingRequestPage;