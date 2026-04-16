"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretLeftBold, PiCaretDownLight } from "react-icons/pi";

const TrainingDetails = () => {
  const router = useRouter();
  const [status, setStatus] = useState("In progress");

  const handleUpdate = () => {
    router.push('/capacity-building');
  };

  const participants = [
    "Fatima Mohammed", "Ibrahim Bankole", "Otor John Stephen", 
    "Abubakar Alghazali", "Ranky Akab", "Sadiq Lukman"
  ];

  return (
    <div className="p-0 bg-gray-50 min-h-screen font-sans">
      {/* <button onClick={() => router.back()} className="flex items-center text-[#3BA8F6] mb-8 font-medium hover:underline">
        <PiCaretLeftBold size={18} className="mr-1" /> Back
      </button> */}

      <div className="bg-white rounded-[32px] p-10 border border-gray-100 max-w-7xl mx-auto shadow-none">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-12">Staff Health and Safety Training</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div><p className="text-black text-sm mb-2">Training type</p><p className="font-extrabold text-gray-900">Team training</p></div>
          <div><p className="text-black text-sm mb-2">Training duration</p><p className="font-extrabold text-gray-900">3 weeks</p></div>
          <div><p className="text-black text-sm mb-2">Training mode</p><p className="font-extrabold text-gray-900">Physical</p></div>
          <div>
            <p className="text-black text-sm mb-2">Training status</p>
            <p className={`font-extrabold ${status === 'Completed' ? 'text-green-500' : 'text-orange-400'}`}>{status}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className=" text-gray-900 mb-6 font-extrabold decoration-2 underline-offset-8">Training participant</h3>
          <ol className="space-y-4">
            {participants.map((name, index) => (
              <li key={index} className="text-black flex items-center">
                <span className="w-6 text-black font-mono">{index + 1}.</span> {name}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex items-end gap-4">
          <div className="w-64 space-y-2">
            <p className="text-md text-black font-medium">Update status</p>
            <div className="relative">
              <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-50 transition-all"
              >
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="To-do">To-do</option>
              </select>
              <PiCaretDownLight className="absolute right-4 top-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <button onClick={handleUpdate} className="btn-primary-gradient px-12 py-4 shadow-none">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;