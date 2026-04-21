'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Back from '@/app/components/back/back';

const DetailsContent = () => {
  const searchParams = useSearchParams();


  const accountName = searchParams.get('accountName') || 'N/A';
  const accountNumber = searchParams.get('accountNumber') || 'N/A';
  const bankName = searchParams.get('bankName') || 'N/A';

  return (
    <div className="flex-1 flex flex-col p-4 bg-[#F8FAFC] min-h-screen pt-0 overflow-x-hidden font-nunito">
      

      <Back />

      <div className="bg-white rounded-[20px] p-10 mx-auto w-full shadow-none border-none mt-4 mb-6" style={{ maxWidth: '1700px' }}>
        

        <h1 className="text-[22px] font-extrabold text-[#1A1C21] mb-8">Request for FARS for October 2022</h1>

   
        <div className="flex gap-16 mb-10">
          <div>
            <p className="text-[12px] font-bold text-[#777777] mb-1">Prepared By</p>
            <p className="text-[14px] font-extrabold text-[#1A1C21]">Otor John</p>
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#777777] mb-1">Send To</p>
            <p className="text-[14px] font-extrabold text-[#1A1C21]">Otor John</p>
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#777777] mb-1">Date</p>
            <p className="text-[14px] font-extrabold text-[#1A1C21]">05/12/2022</p>
          </div>
        </div>


        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] text-[#1A1C21] whitespace-nowrap font-extrabold border-b border-[#D0D0D0]">
                <th className="pb-4 pr-2">S/N</th>
                <th className="pb-4 px-2">Class</th>
                <th className="pb-4 px-2">Description</th>
                <th className="pb-4 px-2 text-center">QTY</th>
                <th className="pb-4 px-2">Unit Price ($)</th>
                <th className="pb-4 px-2">Amount ($)</th>
                <th className="pb-4 px-2">VAT %</th>
                <th className="pb-4 px-2">VAT Amount ($)</th>
                <th className="pb-4 px-2">Gross Amount ($)</th>
                <th className="pb-4 px-2">WHT%</th>
                <th className="pb-4 px-2">WHT Amount</th>
                <th className="pb-4 px-2 text-right">Net Amount</th>
              </tr>
            </thead>
            <tbody className="text-[12px] text-[#1A1C21]">
              <tr className="border-b border-[#D0D0D0] whitespace-nowrap">
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
                <td className="py-5 px-2 font-extrabold text-right">1,050,000.00</td>
              </tr>
              <tr className="border-b border-[#D0D0D0] whitespace-nowrap">
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
                <td className="py-5 px-2 font-extrabold text-right">487,500.00</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex justify-between items-center py-6 mb-16">
          <span className="text-[13px] font-extrabold text-[#1A1C21]">Total</span>
          <div className="flex gap-x-10 text-[13px] font-extrabold text-[#1A1C21] pr-2">
            <span>1,500,000.00</span>
            <span>1,500,000.00</span>
            <span>112,500.00</span>
            <span>75,000.00</span>
            <span className="text-right min-w-[100px]">1,537,500.00</span>
          </div>
        </div>

  
        <div className="mb-10">
          <h3 className="text-[15px] font-extrabold text-[#1A1C21] mb-8">Beneficiary Payment Details</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-[12px] font-bold text-[#777777] mb-2">Account name</p>
              <div className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[13px] text-[#A3A3A3] font-extrabold bg-white uppercase">
                {accountName}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#777777] mb-2">Account number</p>
              <div className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[13px] text-[#A3A3A3] font-extrabold bg-white">
                {accountNumber}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#777777] mb-2">Bank name</p>
              <div className="w-full h-[48px] px-4 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[13px] text-[#A3A3A3] font-extrabold bg-white">
                {bankName}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function PaymentVoucherDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsContent />
    </Suspense>
  );
}