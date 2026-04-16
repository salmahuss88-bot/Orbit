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
      subTitle: "View, search for and add new payment vouchers",
      icon: <BsTicketPerforatedFill />
    },
    "Payroll": {
      title: "Payroll",
      subTitle: "Generate and send payroll to account.",
      icon: <MdPayments />
    },
    "Memo": {
      title: "Memo",
      subTitle: "View, search for and add new memos",
      icon: <BsFillFileEarmarkTextFill />
    },
    "Circulars": {
      title: "Circulars",
      subTitle: "View and add new circulars",
      icon: <BsFillArchiveFill />
    },
    "Maintenance": {
      title: "Maintenance",
      subTitle: "Manage maintenance requests",
      icon: <MdSettings />
    },
    "Logistics": {
      title: "Logistics",
      subTitle: "View and manage logistics and transport",
      icon: <MdLocalShipping />
    },
    "Office Budget": {
      title: "Office Budget",
      subTitle: "Track and manage office expenses",
      icon: <FaMoneyCheckDollar />
    },
    "Stocks and Inventory": {
      title: "Stocks and Inventory",
      subTitle: "Manage warehouse items and levels",
      icon: <BsFillBagCheckFill />
    },
    "Notifications": {
      title: "Notifications",
      subTitle: "View all system alerts and updates",
      icon: <BsFillBellFill />
    },
    "Capacity Building": {
      title: "Capacity Building",
      subTitle: "Staff training and development programs",
      icon: <ImStatsBars2 />
    },
    "Procurements": {
      title: "Procurements",
      subTitle: "View, search for and add new procurements",
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

      <div className="flex justify-between items-center mb-10 font-sans w-full">
        <div>
          <h1 className="text-[24px] font-bold text-black leading-tight">
            <div className="flex flex-col">
              <span className="flex items-center gap-3">
                {currentPage.icon && (
                  <span className="text-[28px] flex items-center gradient-icon">
                    {currentPage.icon}
                  </span>
                )}

                {currentPage.title}

                {currentPage.hasEmoji && (
                  <img
                    src="/Happy-Emoji-PNG 1.svg"
                    alt="Happy Emoji"
                    className="w-[24px] h-[24px] object-contain"
                  />
                )}
              </span>

              {currentPage.subTitle && (
                <span className="text-[14px] font-normal text-[#262626] mt-1">
                  {currentPage.subTitle}
                </span>
              )}
            </div>
          </h1>
        </div>

        <div className="flex items-center gap-0">
          <div className="relative cursor-pointer p-2">
            <IoMdNotifications size={24} className="text-black" />
          </div>

          <div className="flex items-center gap-3 relative ml-4">
            <img src="/Profilepic.svg" className="w-10 h-10 rounded-full object-cover" alt="Profile" />
            <div className="text-left hidden md:block">
              <p className="text-[14px] text-black leading-none">Otor John</p>
              <p className="text-[12px] text-black opacity-50 font-normal mt-1">HR Office</p>
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
                  <li className="px-4 py-3 hover:bg-red-50 cursor-pointer flex items-center gap-3 "><FiLogOut /> Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}