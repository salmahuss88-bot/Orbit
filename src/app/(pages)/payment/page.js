'use client';

import React from 'react';
import DataTable from '../../components/table/table';
import Link from 'next/link';

const PaymentVoucherPage = () => {

  const tableColumns = [
    "S/N", "Subject", "Date", "Prepared By", "Send To", "Action"
  ];

  const staffData = [
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
    { sn: "01", subject: "Request for FARS for October 2022", date: "05/12/2022", preparedBy: "Otor John", sendTo: "Ibrahim Bankole", action: "View more" },
  ];

  return (
    <div className="flex-1 flex flex-col p-4 bg-[#F8FAFC] min-h-screen overflow-x-hidden pt-0"> 
      
      <div 
        className="bg-white rounded-[20px] p-8 mt-0 mb-6 mx-auto grid grid-cols-3 items-center border-none shadow-none"
        style={{ width: '100%', maxWidth: '1700px' }}
      >
       
        <div className="flex flex-col justify-self-start">
          <h2 className="text-[28px] font-bold text-[#1A1C21] leading-none mb-1">250</h2>
          <p className="text-[#777777] text-[14px] font-medium">Total payment vouchers</p>
        </div>

       
        <div className="flex flex-col gap-2 justify-self-center">
          <label className="text-[14px] font-medium text-[#1A1C21]">Filter payment voucher</label>
          <div className="relative">
            <select 
              defaultValue="" 
              className="h-[48px] px-6 rounded-xl bg-[#F2F7FF] text-[#777777] text-[13px] appearance-none min-w-[240px] outline-none cursor-pointer border-none"
            >
              <option value="" disabled hidden>All memos</option>
              <option value="all">All memos</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#1A1C21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

   
        <div className="justify-self-end">
          <Link href="/payment/create">
            <button className="h-[48px] px-10 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-bold text-[14px] shadow-lg hover:opacity-95 transition-all">
              Create Payment Voucher
            </button>
          </Link>
        </div>
      </div>


      <div className="mx-auto w-full" style={{ maxWidth: '1700px' }}>
        <DataTable 
          title="All Payment Vouchers" 
          columns={tableColumns} 
          data={staffData} 
        />
      </div>

    </div>
  );
};

export default PaymentVoucherPage;