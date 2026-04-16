"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    BsGrid1X2Fill, BsFillPeopleFill, BsTicketPerforatedFill,
    BsFillFileEarmarkTextFill, BsFillBellFill, BsFillArchiveFill, BsFillBagCheckFill
} from "react-icons/bs";
import { MdPayments, MdSettings, MdLocalShipping } from "react-icons/md";
import { ImStatsBars2 } from "react-icons/im";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Sidebar = ({ activeItem, setActiveItem }) => {
    const menuItems = [
        { name: 'Dashboard', icon: <BsGrid1X2Fill /> },
        { name: 'Staff', icon: <BsFillPeopleFill /> },
        { name: 'Payment Voucher', icon: <BsTicketPerforatedFill /> },
        { name: 'Payroll', icon: <MdPayments /> },
        { name: 'Memo', icon: <BsFillFileEarmarkTextFill /> },
        { name: 'Circulars', icon: <BsFillArchiveFill /> },
        { name: 'Maintenance', icon: <MdSettings /> },
        { name: 'Logistics', icon: <MdLocalShipping /> },
        { name: 'Office Budget', icon: <FaMoneyCheckDollar /> },
        { name: 'Stocks and Inventory', icon: <BsFillBagCheckFill /> },
        { name: 'Notifications', icon: <BsFillBellFill /> },
        { name: 'Capacity Building', icon: <ImStatsBars2 /> },
        { name: 'Procurements', icon: <BsFillBagCheckFill /> },
    ];

    return (
        <>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .active-gradient-state {
                    background: linear-gradient(to bottom, #14ADD6, #384295);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: transparent;
                    display: inline-flex;
                }
                .active-icon svg {
                    fill: url(#side-gradient) !important;
                }
            `}</style>

            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="side-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop stopColor="#14ADD6" offset="0%" />
                        <stop stopColor="#384295" offset="100%" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="w-72 shrink-0 h-screen" aria-hidden="true" />

            <aside className="fixed left-0 top-0 w-72 h-screen bg-white border-r border-gray-100 flex flex-col py-10 overflow-y-auto hide-scrollbar z-50">
                <div className="flex flex-col items-center mb-12 px-8 text-center">
                    <div className="w-12 h-12 mb-3 relative">
                        <Image src="/Orbit.svg" alt="Orbit Logo" fill className="object-contain" priority />
                    </div>
                    <h1 className="text-[18px] font-bold text-[#3294C6] leading-tight">Orbit</h1>
                    <span className="text-[12px] text-black">ERP System</span>
                </div>

                <nav className="flex-1 w-full">
                    <ul className="flex flex-col w-full">
                        {menuItems.map((item) => {
                            const isActive = activeItem === item.name;

                            let linkPath = "/";
                            if (item.name !== 'Dashboard') {
                                linkPath = `/${item.name.replace(/\s+/g, '-')}`;
                            }

                            return (
                                <li key={item.name} className="w-full">
                                    <Link
                                        href={linkPath}
                                        onClick={() => setActiveItem(item.name)}
                                        className="flex items-center px-10 py-3 w-full relative outline-none cursor-pointer group"
                                    >
                                        <div className={`absolute inset-0 bg-[#f4f9ff] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                                        <div className={`absolute left-0 top-0 bottom-0 w-[6px] rounded-r-full transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-[#14ADD6] to-[#384295] opacity-100' : 'opacity-0'}`} />

                                        <div className={`flex items-center gap-4 z-10 transition-all duration-300 ${isActive ? 'active-gradient-state active-icon' : 'text-black opacity-70'}`}>
                                            <span className="text-[22px] flex items-center justify-center">
                                                {item.icon}
                                            </span>
                                            <span className="text-[14px] whitespace-nowrap font-normal">
                                                {item.name}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;