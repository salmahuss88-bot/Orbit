'use client';

import React, { useRef, useState } from 'react';
import Back from '../../../components/back/back';
import SuccessModal from '../../../components/congratulation/Congrat';

const AddNewStaffPage = () => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [isReadOnly, setIsReadOnly] = useState(true); 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const [modalMessage, setModalMessage] = useState(null);
  const [modalButtonText, setModalButtonText] = useState('Continue');

  const handleUploadClick = () => {
    if (!isSubmitted || !isReadOnly) fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };


  const handleAddStaffAction = () => {
    setModalMessage("You have successfully added a new staff");
    setModalButtonText('Continue');
    setIsModalOpen(true);
    setIsSubmitted(true);
  };


  const handleSubmitAssignRole = () => {
    setModalMessage(
      <span>
        You have successfully assigned a role to <b>{firstName} {lastName}</b>
      </span>
    );
    setModalButtonText('Ok');
    setIsModalOpen(true);
  };

  const dropdowns = [
    { label: 'Gender', placeholder: 'Select gender', options: ['Male', 'Female'] },
    { label: 'Role', placeholder: 'Select role', options: ['Admin', 'I.T', 'Human Resources staff', 'P.M', 'None'] },
    { label: 'Designation', placeholder: 'Select designation', options: ['Human Resources', 'Operations', 'Project Management', 'Customer Service', 'Cleaning', 'Security'] },
  ];

  return (
    <>
      <Back />
      
      <div className="flex-1 flex flex-col p-4 bg-[#F8FAFC] min-h-screen overflow-x-hidden">
        
        <div 
          className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0] mt-4 mb-10 mx-auto"
          style={{ width: '100%', maxWidth: '1700px', minHeight: 'fit-content' }} 
        >
          
          <h2 className="text-[19px] font-bold text-[#1A1C21] mb-6">
            {isSubmitted ? "Edit Staff Profile" : "Add a New Staff"}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              <div onClick={handleUploadClick} className="w-[333px] h-[506px] border border-dashed border-[#E2E8F0] rounded-xl flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-[#fafafa] transition-colors">
                <div className="relative w-[160px] h-[160px] bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center mb-8">
                  <div className="absolute w-[140px] h-[140px] bg-[#F2F2F2] rounded-full flex flex-col items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                    </svg>
                    <span className="text-[#515151] text-[13px] font-medium">Upload photo</span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-[#E2E8F0] rounded-full"></div>
                </div>
                <div className="text-center">
                  <p className="text-[13px] text-[#777777] mb-1 font-normal">Allowed format</p>
                  <p className="text-[13px] text-[#272525] font-semibold mb-6">JPG, JPEG, and PNG</p>
                  <p className="text-[13px] text-[#777777] mb-1 font-normal">Max file size</p>
                  <p className="text-[13px] text-[#272525] font-semibold">2MB</p>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">First name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} readOnly={isSubmitted && isReadOnly} placeholder="Enter first name" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none focus:border-[#2485C1] text-center placeholder:text-left text-[13px] placeholder:text-[#D0D0D0] bg-white w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">Last name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} readOnly={isSubmitted && isReadOnly} placeholder="Enter last name" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none focus:border-[#2485C1] text-center placeholder:text-left text-[13px] placeholder:text-[#D0D0D0] bg-white w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">Email address</label>
                <input type="text" readOnly={isSubmitted && isReadOnly} placeholder="Enter email address" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none focus:border-[#2485C1] text-center placeholder:text-left text-[13px] placeholder:text-[#D0D0D0] bg-white w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">Phone number</label>
                <input type="text" readOnly={isSubmitted && isReadOnly} placeholder="Enter phone number" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none focus:border-[#2485C1] text-center placeholder:text-left text-[13px] placeholder:text-[#D0D0D0] bg-white w-full" />
              </div>

              {dropdowns.map((drop, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1A1C21]">{drop.label}</label>
                  <div className="relative">
                    <select 
                      defaultValue="" 
                      disabled={isSubmitted && isReadOnly} 
                      className="w-full h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none bg-white text-[#1A1C21] text-[13px] cursor-pointer appearance-none text-center"
                    >
                      <option value="" disabled hidden>{drop.placeholder}</option>
                      {drop.options.map((opt, i) => (<option key={i} value={opt}>{opt}</option>))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="#1A1C21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">Staff ID</label>
                <input type="text" placeholder="Staff ID" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none bg-[#F2F2F2] text-[13px] placeholder:text-[#383838] w-full text-center" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#1A1C21]">Official email</label>
                <input type="text" placeholder="Official Email" className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl outline-none bg-[#F2F2F2] text-[13px] placeholder:text-[#383838] w-full text-center" />
              </div>

              {isSubmitted && (
                <div className="flex items-end">
                   <button onClick={() => setIsReadOnly(false)} className="h-[48px] w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px]">Edit Profile</button>
                </div>
              )}
            </div>
          </div>

          {!isSubmitted && (
            <div className="mt-8">
              <button onClick={handleAddStaffAction} className="h-[48px] px-34 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px] shadow-lg hover:opacity-95 transition-all">Add Staff</button>
            </div>
          )}
        </div>

        {isSubmitted && (
          <div className="bg-white rounded-[20px] p-8 shadow-sm border border-[#E2E8F0] mx-auto w-full max-w-[1700px] mb-10">
            <h2 className="text-[19px] font-bold text-[#1A1C21] mb-6">Assign Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
               <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1A1C21]">User ID</label>
                  <input type="text" placeholder="0023AD" disabled className="h-[48px] px-5 border border-[#D0D0D0] rounded-xl bg-[#F2F2F2] text-center" />
               </div>
               <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1A1C21]">Role</label>
                  <div className="relative">
                    <select 
                      defaultValue="" 
                      className="w-full h-[48px] px-5 border border-[#D0D0D0] rounded-xl bg-white text-left text-[#1A1C21] appearance-none cursor-pointer text-[13px] outline-none text-center"
                    >
                      <option value="" disabled hidden>Select role</option>
                      <option value="Admin">Admin</option>
                      <option value="I.T">I.T</option>
                      <option value="Manager">Manager</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="#1A1C21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
               </div>
               <button onClick={handleSubmitAssignRole} className="h-[48px] bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px] shadow-lg hover:opacity-95 transition-all">Submit</button>
            </div>
          </div>
        )}
      </div>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Congratulations" 
        message={modalMessage} 
        buttonText={modalButtonText} 
      />
    </>
  );
};

export default AddNewStaffPage;