"use client";
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FiChevronDown, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import {
  BsFillPeopleFill,
  BsTicketPerforatedFill,
  BsFillFileEarmarkTextFill,
  BsFillArchiveFill,
  BsFillBagCheckFill,
  BsFillBellFill
} from "react-icons/bs";
import { MdPayments, MdSettings, MdLocalShipping } from "react-icons/md";
import { ImStatsBars2 } from "react-icons/im";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export default function Header({ activePageName }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const pageDetails = {
    "Dashboard": {
      title: "Welcome, Mr. Otor John",
      subTitle: "Today is Saturday, 11th November 2022.",
      hasEmoji: true,
      icon: null
    },
    "Staff": {
      title: "All Staff",
      subTitle: "View, search for and add new staff",
      icon: <BsFillPeopleFill />
    },
    "Payment Voucher": {
      title: "Payment Voucher",
      subTitle: "Create payment voucher",
      icon: <BsTicketPerforatedFill />
    },
    "Payroll": {
      title: "Payroll",
      subTitle: "Generate and send payroll to account.",
      icon: <MdPayments />
    },
    "Memo": {
      title: "Memo",
      subTitle: "Create and send memos to designated offices.",
      icon: <BsFillFileEarmarkTextFill />
    },
    "Circulars": {
      title: "Circulars",
      subTitle: "Search for and view all circulars",
      icon: <BsFillArchiveFill />
    },
    "Maintenance": {
      title: "Maintenance",
      subTitle: "View and create schedule for maintenance",
      icon: <MdSettings />
    },
    "Logistics": {
      title: "Logistics",
      subTitle: "Make and send logistics request.",
      icon: <MdLocalShipping />
    },
    "Office Budget": {
      title: "Office Budget",
      subTitle: "View, create and send budget request.",
      icon: <FaMoneyCheckDollar />
    },
    "Stocks and Inventory": {
      title: "Stocks and Inventory",
      subTitle: "Update stoke and inventory table",
      icon: <BsFillBagCheckFill />
    },
    "Notifications": {
      title: "Notifications",
      subTitle: "Read and delete notifications.",
      icon: <BsFillBellFill />
    },
    "capacity-building": {
      title: "Capacity Building",
      subTitle: "Create and submit request for staff training",
      icon: <ImStatsBars2 />
    },
    "Procurements": {
      title: "Procurements",
      subTitle: "Request for, and view all requested procurements.",
      icon: <BsFillBagCheckFill />
    }
  };

  const currentPage = pageDetails[activePageName] || {
    title: activePageName,
    subTitle: "",
    icon: null
  };

  return (
    <>
      <svg width="0" height="0" className="absolute shadow-none">
        <linearGradient id="header-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#14ADD6" offset="0%" />
          <stop stopColor="#384295" offset="100%" />
        </linearGradient>
      </svg>

      <style jsx>{`
        .gradient-icon :global(svg) {
          fill: url(#header-gradient);
        }
      `}</style>

      <div className="flex flex-wrap justify-between items-start lg:items-center mb-6 lg:mb-10 font-sans w-full gap-y-4">
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-[20px] lg:text-[24px] font-bold text-black leading-tight">
            <div className="flex flex-col">
              <span className="flex items-center gap-2 lg:gap-3 flex-wrap">
                {currentPage.icon && (
                  <span className="text-[24px] lg:text-[28px] flex items-center gradient-icon">
                    {currentPage.icon}
                  </span>
                )}

                {currentPage.title}

                {currentPage.hasEmoji && (
                  <img
                    src="/Happy-Emoji-PNG 1.svg"
                    alt="Happy Emoji"
                    className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] object-contain"
                  />
                )}
              </span>

              {currentPage.subTitle && (
                <span className="text-[12px] lg:text-[14px] font-normal text-[#262626] mt-1 block">
                  {currentPage.subTitle}
                </span>
              )}
            </div>
          </h1>
        </div>

        <div className="flex items-center gap-2 lg:gap-4 ml-auto">
          <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IoMdNotifications size={24} className="text-black" />
          </div>

          <div className="flex items-center gap-2 lg:gap-3 relative">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border border-gray-100 shrink-0">
               <img src="/Profilepic.svg" className="w-full h-full object-cover" alt="Profile" />
            </div>
            
            <div className="text-left hidden sm:block">
              <p className="text-[13px] lg:text-[14px] text-black font-semibold leading-none">Otor John</p>
              <p className="text-[11px] lg:text-[12px] text-black opacity-50 font-normal mt-1">HR Office</p>
            </div>

            <FiChevronDown
              className={`text-black text-lg cursor-pointer transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`}
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            />

            {isProfileMenuOpen && (
              <div className="absolute right-0 top-full mt-4 w-48 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 z-50">
                <ul className="text-black text-[14px]">
                  <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"><FiUser /> Profile</li>
                  <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"><FiSettings /> Settings</li>
                  <li className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-center gap-3 text-red-600"><FiLogOut /> Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}