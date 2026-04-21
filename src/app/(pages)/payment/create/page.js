'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePaymentVoucher = () => {
  const router = useRouter();

 
  const [beneficiary, setBeneficiary] = useState({
    name: '',
    number: '',
    bank: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeneficiary(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {

    const query = new URLSearchParams({
      accountName: beneficiary.name,
      accountNumber: beneficiary.number,
      bankName: beneficiary.bank
    }).toString();

    router.push(`/payment/details?${query}`);
  };

  return (
    <div className="flex-1 flex flex-col p-4 bg-[#F8FAFC] min-h-screen pt-0 overflow-x-hidden">
      
      <div className="bg-white rounded-[20px] p-10 mx-auto w-full shadow-none border-none mt-0 mb-6" style={{ maxWidth: '1700px' }}>
        
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
              <tr className="text-[11px] text-[#1A1C21] whitespace-nowrap font-nunito font-extrabold">
                <th className="pb-2 pr-2">S/N</th>
                <th className="pb-2 px-2">Class</th>
                <th className="pb-2 px-2">Description</th>
                <th className="pb-2 px-2 text-center">QTY</th>
                <th className="pb-2 px-2">Unit Price ($)</th>
                <th className="pb-2 px-2">Amount ($)</th>
                <th className="pb-2 px-2">VAT %</th>
                <th className="pb-2 px-2">VAT Amount ($)</th>
                <th className="pb-2 px-2">Gross Amount ($)</th>
                <th className="pb-2 px-2">WHT%</th>
                <th className="pb-2 px-2">WHT Amount</th>
                <th className="pb-2 px-2 text-right">Net Amount</th>
              </tr>
            </thead>
            <tbody className="text-[12px] text-[#1A1C21]">
              <tr className="border-b border-[#D0D0D0] whitespace-nowrap">
                <td className="py-3 pr-2">01</td>
                <td className="py-3 px-2">Consultancy service</td>
                <td className="py-3 px-2">FARS</td>
                <td className="py-3 px-2 text-center">1</td>
                <td className="py-3 px-2">1,000,000.00</td>
                <td className="py-3 px-2">1,000,000.00</td>
                <td className="py-3 px-2">7.50%</td>
                <td className="py-3 px-2">75,000.00</td>
                <td className="py-3 px-2">1,075,000.00</td>
                <td className="py-3 px-2">2.5%</td>
                <td className="py-3 px-2">25,000.00</td>
                <td className="py-3 px-2 font-bold text-right">1,050,000.00</td>
              </tr>
              <tr className="border-b border-[#D0D0D0] whitespace-nowrap">
                <td className="py-3 pr-2">02</td>
                <td className="py-3 px-2">Consultancy service</td>
                <td className="py-3 px-2">Tax Service</td>
                <td className="py-3 px-2 text-center">1</td>
                <td className="py-3 px-2">500,000.00</td>
                <td className="py-3 px-2">500,000.00</td>
                <td className="py-3 px-2">7.50%</td>
                <td className="py-3 px-2">37,500.00</td>
                <td className="py-3 px-2">537,500.00</td>
                <td className="py-3 px-2">10%</td>
                <td className="py-3 px-2">50,000.00</td>
                <td className="py-3 px-2 font-bold text-right">487,500.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="py-4">
          <button className="flex items-center gap-2 text-[12px] font-bold text-[#1A1C21] border border-[#E2E8F0] px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">
            <span className="text-[16px]">+</span> Add another row
          </button>
        </div>

        <div className="flex justify-between items-center py-4 border-b border-[#D0D0D0] mb-8">
          <span className="text-[13px] font-bold text-[#1A1C21] pl-21">Total</span>
          <div className="flex gap-x-10 text-[13px] font-bold text-[#1A1C21] pr-2">
            <span>1,500,000.00</span>
            <span>1,500,000.00</span>
            <span>112,500.00</span>
            <span>75,000.00</span>
            <span className="text-right min-w-[100px]">1,537,500.00</span>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-2">
          <span className="text-[14px] text-[#1A1C21] font-medium whitespace-nowrap">Net amount in words:</span>
          <div 
            className="flex-1 h-[1px] translate-y-1" 
            style={{ 
              background: `repeating-linear-gradient(to right, #A3A3A3 0, #A3A3A3 6px, transparent 6px, transparent 12px)` 
            }}
          ></div>
        </div>

        <div className="mb-10">
          <h3 className="text-[15px] font-bold text-[#1A1C21] mb-6">Beneficiary Payment Details</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Account name</label>
              <input 
                name="name"
                value={beneficiary.name}
                onChange={handleChange}
                type="text" 
                placeholder="Enter name" 
                className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" 
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Account number</label>
              <input 
                name="number"
                value={beneficiary.number}
                onChange={handleChange}
                type="text" 
                placeholder="Enter number" 
                className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" 
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#1A1C21] mb-2">Bank name</label>
              <input 
                name="bank"
                value={beneficiary.bank}
                onChange={handleChange}
                type="text" 
                placeholder="Enter bank name" 
                className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] bg-white outline-none text-[13px] text-center placeholder:text-[#777777]/50" 
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto w-full" style={{ maxWidth: '1700px' }}>
        <button 
          onClick={handleSubmit}
          className="h-[48px] px-12 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px] shadow-lg hover:opacity-95 transition-all"
        >
          Submit Payment Voucher
        </button>
      </div>

    </div>
  );
};

export default CreatePaymentVoucher;