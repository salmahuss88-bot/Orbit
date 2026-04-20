'use client';

import React from 'react';

const CreatePaymentVoucher = () => {
  return (
    <div className="flex-1 flex flex-col p-4 bg-[#F8FAFC] min-h-screen pt-0 overflow-x-hidden">
      
  
      <div className="bg-white rounded-[20px] p-10 mx-auto w-full shadow-none border-none mt-0" style={{ maxWidth: '1700px' }}>
        
        <h2 className="text-[18px] font-bold text-[#1A1C21] mb-8">Payment Voucher</h2>

        <div className="mb-8">
          <label className="block text-[14px] font-medium text-[#1A1C21] mb-2">Subject</label>
          <input 
            type="text" 
            placeholder="Enter subject" 
            className="w-full max-w-md h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none focus:border-[#14ADD6] transition-all text-[14px] text-center placeholder:text-[#777777]/50"
          />
        </div>

  
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[12px] text-[#777777] border-b border-[#F1F5F9]">
                <th className="pb-4 font-medium pr-2">S/N</th>
                <th className="pb-4 font-medium px-2">Class</th>
                <th className="pb-4 font-medium px-2">Description</th>
                <th className="pb-4 font-medium px-2 text-center">QTY</th>
                <th className="pb-4 font-medium px-2">Unit Price ($)</th>
                <th className="pb-4 font-medium px-2">Amount ($)</th>
                <th className="pb-4 font-medium px-2">VAT %</th>
                <th className="pb-4 font-medium px-2">VAT Amount ($)</th>
                <th className="pb-4 font-medium px-2">Gross Amount ($)</th>
                <th className="pb-4 font-medium px-2">WHT%</th>
                <th className="pb-4 font-medium px-2">WHT Amount</th>
                <th className="pb-4 font-medium px-2 text-right">Net Amount</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-[#1A1C21]">
              <tr className="border-b border-[#F1F5F9]">
                <td className="py-5 pr-2">01</td>
                <td className="py-5 px-2">Consultancy service</td>
                <td className="py-5 px-2">FARS</td>
                <td className="py-5 px-2 text-center">1</td>
                <td className="py-5 px-2">1,000,000.00</td>
                <td className="py-5 px-2">1,000,000.00</td>
                <td className="py-5 px-2">7.50%</td>
                <td className="py-5 px-2">75,000.00</td>
                <td className="py-5 px-2">1,075,000.00</td>
                <td className="py-5 px-2">2.5%</td>
                <td className="py-5 px-2">25,000.00</td>
                <td className="py-5 px-2 font-bold text-right">1,050,000.00</td>
              </tr>
              <tr className="border-b border-[#F1F5F9]">
                <td className="py-5 pr-2">02</td>
                <td className="py-5 px-2">Consultancy service</td>
                <td className="py-5 px-2">Tax Service</td>
                <td className="py-5 px-2 text-center">1</td>
                <td className="py-5 px-2">500,000.00</td>
                <td className="py-5 px-2">500,000.00</td>
                <td className="py-5 px-2">7.50%</td>
                <td className="py-5 px-2">37,500.00</td>
                <td className="py-5 px-2">537,500.00</td>
                <td className="py-5 px-2">10%</td>
                <td className="py-5 px-2">50,000.00</td>
                <td className="py-5 px-2 font-bold text-right">487,500.00</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex justify-between items-center py-6 border-b border-[#F1F5F9] mb-8">
          <button className="flex items-center gap-2 text-[13px] font-bold text-[#1A1C21] border border-[#E2E8F0] px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
            <span className="text-[18px]">+</span> Add another row
          </button>
          
          <div className="flex gap-x-12 items-center pr-2">
             <span className="text-[14px] font-bold text-[#1A1C21]">Total</span>
             <div className="flex gap-x-10 text-[14px] font-bold text-[#1A1C21]">
                <span>1,500,000.00</span>
                <span>1,500,000.00</span>
                <span>112,500.00</span>
                <span>75,000.00</span>
                <span className="text-right min-w-[100px]">1,537,500.00</span>
             </div>
          </div>
        </div>

 
        <div className="mb-12 flex items-center gap-2">
          <span className="text-[14px] text-[#1A1C21] font-medium whitespace-nowrap">Net amount in words:</span>
          <div className="flex-1 border-b border-dashed border-[#D1D5DB] translate-y-1"></div>
        </div>

   
        <div className="mb-10">
          <h3 className="text-[15px] font-bold text-[#1A1C21] mb-6">Beneficiary Payment Details</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Account name</label>
              <input type="text" placeholder="Enter name" className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Account number</label>
              <input type="text" placeholder="Enter number" className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Bank name</label>
              <input type="text" placeholder="Enter bank name" className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" />
            </div>
          </div>
        </div>


        <div>
          <button className="h-[48px] px-12 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px] shadow-lg hover:opacity-95 transition-all">
            Submit Payment Voucher
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreatePaymentVoucher;