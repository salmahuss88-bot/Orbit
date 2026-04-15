"use client";
import React, { useState, useEffect } from 'react'; 
import { PiHeadCircuitThin } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const CapacityBuilding = () => {
  const router = useRouter();
  const [trainings, setTrainings] = useState([]); 

  useEffect(() => {
    const defaultData = Array(5).fill({
      description: 'Staff Health and Safety Training',
      date: '03/12/2022',
      type: 'Team',
      duration: '3days',
      mode: 'Physical',
      status: 'Completed'
    });

    const savedData = JSON.parse(localStorage.getItem('trainings') || '[]');
    // نضع البيانات الجديدة أولاً ثم الثابتة
    setTrainings([...savedData, ...defaultData]);
  }, []);
  
  const stats = [
    { label: 'Total training request', value: '350', bgColor: 'bg-[#EBF5FF]', iconColor: 'text-[#3B82F6]' },
    { label: 'Total staff trained', value: '800', bgColor: 'bg-[#FFF4EB]', iconColor: 'text-[#F59E0B]' },
    { label: 'Total training done', value: '300', bgColor: 'bg-[#F5EBFF]', iconColor: 'text-[#8B5CF6]' },
    { label: 'Staff training rate', value: '70%', bgColor: 'bg-[#FFFBEB]', iconColor: 'text-[#FACC15]' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans" dir="ltr">
      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium mt-1">{stat.label}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <PiHeadCircuitThin className={`${stat.iconColor} text-4xl font-light`} />
            </div>
          </div>
        ))}
      </div>

      {/* زر الطلب الجديد */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 flex justify-between items-center border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Training request</h2>
        <button
          onClick={() => router.push('/capacity-building/request')}
          className="bg-gradient-to-r from-[#3BA8F6] to-[#2D5EB3] text-white px-10 py-3 rounded-xl font-medium shadow-md hover:opacity-90 active:scale-95 transition-all"
        >
          Make Training Request
        </button>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">All Trainings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="pb-4 font-semibold px-2">S/N</th>
                <th className="pb-4 font-semibold px-2">Training Description</th>
                <th className="pb-4 font-semibold px-2">Start Date</th>
                <th className="pb-4 font-semibold px-2">Training Type</th>
                <th className="pb-4 font-semibold px-2">Duration</th>
                <th className="pb-4 font-semibold px-2">Training Mode</th>
                <th className="pb-4 font-semibold px-2">Status</th>
                <th className="pb-4 font-semibold px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-[14px]">
              {trainings.map((item, index) => (
                <tr key={index} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-2">{String(index + 1).padStart(2, '0')}</td>
                  <td className="py-4 px-2 font-medium text-gray-800">{item.description}</td>
                  <td className="py-4 px-2 text-gray-400">{item.date}</td>
                  <td className="py-4 px-2 text-gray-400">{item.type}</td>
                  <td className="py-4 px-2 text-gray-400">{item.duration}</td>
                  <td className="py-4 px-2 text-gray-400">{item.mode}</td>
                  <td className="py-4 px-2">
                    <span className={item.status === "Inprogress" || item.status === "In progress" ? "text-orange-400" : item.status === "Completed" ? "text-[#22C55E]" : "text-gray-400"}>
                      • {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <button
                      onClick={() => router.push('/capacity-building/details')}
                      className="text-[#3B82F6] hover:text-blue-700 font-semibold transition-colors underline underline-offset-4"
                    >
                      View more
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapacityBuilding;