"use client";

import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { BsArrowUpRight, BsArrowDownLeft, BsPlus } from 'react-icons/bs';

const MemoSystem = () => {
  const [currentPage, setCurrentPage] = useState(1); // 1: الجدول، 2: الإنشاء، 3: التفاصيل
  const [showSuccess, setShowSuccess] = useState(false);
  const [activePageNum, setActivePageNum] = useState(1);

  // بيانات الجدول
  const memosData = Array(16).fill({
    sn: "01",
    title: "Operations memo",
    from: "Williams Achegbani",
    to: "Chief Operations Officer",
    date: "16/11/2022",
    attach: "Yes",
    type: "Sent",
    icon: <BsArrowUpRight className="text-[10px]" />
  }).map((memo, i) => ({
    ...memo,
    sn: (i + 1).toString().padStart(2, '0'),
    type: i % 4 === 3 ? "Received" : "Sent",
    icon: i % 4 === 3 ? <BsArrowDownLeft className="text-[10px]" /> : <BsArrowUpRight className="text-[10px]" />
  }));


  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[40px] p-12 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex justify-center mb-10">
          <img src="/Congratulations.svg" alt="Success" className="w-44 h-44 object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-black mb-4">Congratulations</h2>
        <p className="text-gray-500 text-base mb-10 leading-relaxed px-4">Your memo has been created and sent successfully.</p>
        <button
          onClick={() => { setShowSuccess(false); setCurrentPage(1); }}
          className="w-max px-16 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white py-3 rounded-xl font-normal text-lg shadow-md active:scale-95 transition-all mx-auto block"
        >
          Ok
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans text-slate-700 pb-10">
      {showSuccess && <SuccessModal />}

      {/* --- الصفحة 1:  --- */}
      {currentPage === 1 && (
        <div className="max-w-[1400px] mx-auto animate-in fade-in duration-500">
          {/* Header Section */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm mb-8 flex items-center justify-between gap-6 border border-gray-100">
            <div className="pr-12 border-r border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-1">300</h2>
              <p className="text-black-400 text-xs font-normal tracking-wider ">Total memo</p>
            </div>
            <div className="flex-1 max-w-md">
              <p className="text-[11px] font- mb-2 text-black-500  tracking-widest">Quick search a memo</p>
              <div className="relative">
                <input type="text" placeholder="Enter search word" className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl outline-none text-sm font-light focus:border-[#2485C1]" />
                <FiSearch className="absolute right-4 top-3.5 text-gray-400" />
              </div>
            </div>
            <div className="w-56">
              <p className="text-[11px] font- mb-2 text-black-500  tracking-widest">Filter memo</p>
              <div className="relative">
                <select className="w-full p-3 border border-#F2F7FF-200 rounded-xl bg-white appearance-none font-light text-sm text-gray-600 outline-none">
                  <option>All memos</option>
                </select>
                <FiChevronDown className="absolute right-4 top-3.5 text-gray-400" />
              </div>
            </div>
            <button onClick={() => setCurrentPage(2)} className="bg-[#2485C1] text-white px-12 py-3.5 rounded-xl font-normal text-sm shadow-md hover:bg-[#1d6b9c] transition-all">
              Create Memo
            </button>
          </div>

          <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-gray-100">
            <div className="px-8 py-6 flex justify-between items-center border-b border-gray-50">
              <h3 className="text-xl font-bold text-black">All Memos</h3>
              <div className="text-sm font-normal text-black-400">
                Showing <span className="mx-1 px-3 py-3 border rounded-lg text-[#2485C1] font-normal border-#384295-200">16</span> per page
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#FFFFFF] text-#FFFFFF-500 text-[10px] font-bold tracking-widest border-b#FFFFFF border-#FFFFFF-100 ">
                  <tr>
                    <th className="px-8 py-4">S/N</th>
                    <th className="px-8 py-4">Memo Title</th>
                    <th className="px-8 py-4">Sent From</th>
                    <th className="px-8 py-4">Sent To</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4">Attachment?</th>
                    <th className="px-8 py-4">Memo Type</th>
                    <th className="px-8 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-gray-600 divide-y divide-gray-50">
                  {memosData.map((memo, idx) => (
                    <tr key={idx} className="hover:bg-black-50/50 transition-colors">
                      <td className="px-8 py-5 text-gray-400">{memo.sn}</td>
                      <td className="px-8 py-5 text-gray-400 font-medium">{memo.title}</td>
                      <td className="px-8 py-5 text-gray-400 font-medium">{memo.from}</td>
                      <td className="px-8 py-5 text-gray-400 font-medium">{memo.to}</td>
                      <td className="px-8 py-5 text-gray-400 font-medium">{memo.date}</td>
                      <td className="px-8 py-5 text-gray-400 font-medium">{memo.attach}</td>
                      <td className="px-8 py-5 text-black font-medium"><span className="flex items-center gap-1 font-light">{memo.type} {memo.icon}</span></td>
                      <td className="px-8 py-5 text-gray-400 font-medium">
                        <button onClick={() => setCurrentPage(3)} className="text-[#2485C1] font-normal hover:underline">View more</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 flex justify-start items-center gap-2.5">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} onClick={() => setActivePageNum(num)} className={`w-11 h-11 rounded-xl font-normal transition-all border ${activePageNum === num ? "bg-gradient-to-b from-[#2485C1] to-[#20638b] text-white border-transparent shadow-lg" : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"}`}>{num}</button>
              ))}
              <button className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-gray-400 font-normal hover:bg-gray-50">&gt;&gt;</button>
            </div>
          </div>
        </div>
      )}

      {/* ---الصفحة 2: --- */}
      {currentPage === 2 && (
        <div className="max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button onClick={() => setCurrentPage(1)} className="text-[#2485C1] font-normal mb-8 flex items-center gap-2 text-lg hover:opacity-80 transition-opacity">
            <FiArrowLeft size={20} /> Back
          </button>

          <div className="bg-white rounded-[40px] p-16 shadow-sm border border-gray-100">
            <h2 className="text-[32px] font-bold text-[#1A1A1A] mb-12">Create Memo</h2>

            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              <div className="flex flex-col gap-[8px]">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Memo title</label>
                <input type="text" placeholder="Enter title" className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl outline-none focus:border-[#2485C1] font-light placeholder:text-[#C2C2C2] text-lg transition-all text-center focus:placeholder-transparent" />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Sent from</label>
                <div className="w-full h-[64px] px-6 bg-[#F2F2F2] border border-[#E0E0E0] rounded-2xl flex items-center justify-center text-[#1A1A1A] font-normal text-lg">Otor John</div>
              </div>

              <div className="flex flex-col gap-[8px] relative">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Sent to</label>
                <div className="relative">
                  <select className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl appearance-none outline-none font-light text-[#C2C2C2] text-lg cursor-pointer">
                    <option>Select option</option>
                  </select>
                  <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={24} />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] relative">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Action</label>
                <div className="relative">
                  <select className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl appearance-none outline-none font-light text-[#C2C2C2] text-lg cursor-pointer">
                    <option>Select option</option>
                  </select>
                  <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={24} />
                </div>
              </div>

              <div className="flex items-end h-[64px] mt-[30px]">
                <button className="w-[64px] h-[64px] border border-[#E0E0E0] rounded-2xl flex items-center justify-center text-[#1A1A1A] hover:bg-gray-50 transition-all bg-white shadow-sm">
                  <BsPlus size={36} />
                </button>
              </div>

              <div></div>


              <div className="flex flex-col gap-[8px] relative">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl outline-none font-light placeholder:text-[#C2C2C2] text-lg focus:border-[#2485C1]"
                  />
                  <FiCalendar className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={22} />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] relative">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Add attachement?</label>
                <div className="relative">
                  <select className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl appearance-none outline-none font-light text-[#1A1A1A] text-lg cursor-pointer">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={24} />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] relative">
                <label className="text-sm font-medium text-[#4D4D4D] ml-1">Attachement type</label>
                <div className="relative">
                  <select className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl appearance-none outline-none font-light text-[#C2C2C2] text-lg cursor-pointer">
                    <option>Select type</option>
                  </select>
                  <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={24} />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-[8px]">
              <label className="text-sm font-medium text-[#4D4D4D] ml-1">Memo body</label>
              <textarea placeholder="Enter subject" style={{ width: '720px', height: '157px' }} className="p-6 border border-[#E0E0E0] rounded-2xl outline-none resize-none leading-relaxed font-light placeholder:text-[#C2C2C2] text-lg focus:border-[#2485C1] transition-all"></textarea>
            </div>

            <div className="mt-16 flex gap-10" style={{ width: '720px' }}>
              <button onClick={() => setShowSuccess(true)} className="flex-1 h-[72px] bg-gradient-to-r from-[#2485C1] to-[#1a5f8a] text-white rounded-2xl font-medium text-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
                Attache Payment Voucher
              </button>
              <button onClick={() => setShowSuccess(true)} className="flex-1 h-[72px] bg-white text-[#2485C1] border-2 border-[#2485C1] rounded-2xl font-medium text-xl hover:bg-blue-50 active:scale-[0.98] transition-all">
                Send Memo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -الصفحة 3: --- */}
      {currentPage === 3 && (
        <div className="max-w-[1200px] mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
          <button onClick={() => setCurrentPage(1)} className="text-[#2485C1] font-normal mb-8 flex items-center gap-2 text-lg hover:opacity-80 transition-opacity">
            <FiArrowLeft size={20} /> Back
          </button>

          <div className="bg-white rounded-[40px] p-16 shadow-sm border border-gray-100">
            <h2 className="text-[32px] font-bold text-[#1A1A1A] mb-12">Operations Memo</h2>

            <div className="flex flex-col gap-6 mb-12 text-lg text-[#1A1A1A]">
              <p><span className="font-bold">Date:</span> 21/12/2022</p>
              <p><span className="font-bold">From:</span> Otor John Stephen</p>
              <p><span className="font-bold">To:</span> Abubakr Algazali</p>
              <p><span className="font-bold">CC1:</span> Fatimah Mohammed</p>
              <p><span className="font-bold">CC2:</span> Sadiq Lukman</p>
              <p><span className="font-bold">CC3:</span> Jemz Nweke Jnr.</p>
              <p className="mt-4"><span className="font-bold">Attachment:</span> No</p>
            </div>

            <div className="mb-12">
              <p className="text-lg leading-relaxed text-[#1A1A1A]">
                <span className="font-bold">Memo Message:</span>
                <span className="ml-2 text-[#666666]">
                  Memo Message: Lorem ipsum dolor sit amet consectetur. Purus lacinia pulvinar morbi praesent
                  ultricies mollis. egestas senectus non neque sem. Fermentum mi ipsum dictumst
                  Amet praesent convallis vivamus rhoncus. Volutpat sit aliquet elementum facilisi consectetur. Amet rhoncus varius iaculis et integer.
                  In eu praesent consequat
                  magnis erat penatibus a.
                  Eu nulla cursus sagittis at gravida a proin sit augue. Massa integer ut interdum orci porta duis diam id pellentesque. Sem viverra iaculis quisque etiam
                  phasellus nullam vestibulum
                  gravida.
                </span>
              </p>
            </div>

            <div className="border-t border-[#E0E0E0] pt-12 mb-12">
              <div className="w-full overflow-hidden rounded-xl border border-gray-50 bg-[#F2F2F2] flex items-center justify-center min-h-[400px]">
                <img src="/memo3.svg" alt="Invoice Attachment" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="flex justify-between items-center py-8 border-t border-b border-[#E0E0E0] mb-12">
              <p className="text-lg font-bold text-[#1A1A1A]">Action: <span className="font-normal text-[#666666] ml-2">Recommended for approval</span></p>
              <p className="text-lg font-bold text-[#1A1A1A]">By: <span className="font-normal text-[#666666] ml-2">Fatimah Mohammed</span></p>
              <p className="text-lg font-bold text-[#1A1A1A]">Signature:</p>
            </div>

            <div className="flex flex-row items-end gap-6">
              <div className="flex-1 flex flex-col gap-3">
                <label className="text-xs font- text-[#4D4D4D]  tracking-widest ml-1">Action</label>
                <div className="relative">
                  <select className="w-full h-[64px] px-6 bg-white border border-[#E0E0E0] rounded-2xl appearance-none outline-none text-[#C2C2C2] text-lg cursor-pointer focus:border-[#2485C1]">
                    <option>Select action</option>
                  </select>
                  <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[#666666]" size={24} />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <label className="text-xs font- text-[#4D4D4D]  tracking-widest ml-1">Remarks</label>
                <input
                  type="text"
                  placeholder="Enter remark"
                  className="w-full h-[64px] px-6 border border-[#E0E0E0] rounded-2xl outline-none placeholder:text-[#C2C2C2] text-lg focus:border-[#2485C1]"
                />
              </div>

              <button
                onClick={() => setCurrentPage(1)}
                className="flex-1 h-[64px] bg-gradient-to-r from-[#2485C1] to-[#1a5f8a] text-white rounded-2xl font-medium text-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoSystem;