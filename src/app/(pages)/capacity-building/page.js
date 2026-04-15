"use client";
import React, { useState, useEffect } from 'react'; 
import { ImStatsBars2 } from "react-icons/im"; 
import { useRouter } from 'next/navigation';

const CapacityBuilding = () => {
  const router = useRouter();
  const [trainings, setTrainings] = useState([]); 

  useEffect(() => {
    const defaultData = [
      { description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3days', mode: 'Physical', status: 'Completed' },
      { description: 'Software Development Workshop', date: '10/01/2023', type: 'Individual', duration: '5days', mode: 'Online', status: 'Inprogress' },
      { description: 'New Employee Orientation', date: '15/02/2023', type: 'Team', duration: '1day', mode: 'Physical', status: 'To-do' },
    ];

    const savedData = JSON.parse(localStorage.getItem('trainings') || '[]');
    setTrainings([...savedData, ...defaultData]);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600";
      case "Inprogress":
        return "bg-orange-50 text-orange-600";
      case "To-do":
        return "bg-gray-100 text-black";
      default:
        return "bg-gray-50 text-gray-500";
    }
  };
  
  const stats = [
    { label: 'Total training request', value: '350', bgColor: 'bg-[#EBF5FF]', iconColor: 'text-[#3B82F6]' },
    { label: 'Total staff trained', value: '800', bgColor: 'bg-[#FFF4EB]', iconColor: 'text-[#F59E0B]' },
    { label: 'Total training done', value: '300', bgColor: 'bg-[#F5EBFF]', iconColor: 'text-[#8B5CF6]' },
    { label: 'Staff training rate', value: '70%', bgColor: 'bg-[#FFFBEB]', iconColor: 'text-[#FACC15]' },
  ];

  return (
    <div className=" p-0 w-full max-w-[1600px] mx-auto space-y-8" dir="ltr">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl flex justify-between items-center border border-gray-100 transition-colors hover:bg-gray-50">
            <div>
              <h3 className="text-2xl font-bold text-black tracking-tight">{stat.value}</h3>
              <p className="text-black text-[13px] font-medium mt-0.5">
                {stat.label}
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <ImStatsBars2 className={`${stat.iconColor} text-lg`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl flex justify-between items-center border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Training request</h2>
        <button
          onClick={() => router.push('/capacity-building/request')}
          className="btn-primary-gradient"
        >
          Make Training Request
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-50">
           <h2 className="text-lg font-bold text-gray-800">All Trainings</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-50/40">
              <tr className="text-gray-700 text-[10px] uppercase tracking-wider font-bold">
                <th className="py-4 px-4">S/N</th>
                <th className="py-4 px-4">Training Description</th>
                <th className="py-4 px-4">Start Date</th>
                <th className="py-4 px-4">Type</th>
                <th className="py-4 px-4">Duration</th>
                <th className="py-4 px-4">Mode</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[12px] text-gray-500 font-normal">
              {trainings.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50/10 transition-colors whitespace-nowrap">
                  <td className="py-4 px-4 font-mono text-[10px] text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-600">{item.description}</td>
                  <td className="py-4 px-4">{item.date}</td>
                  <td className="py-4 px-4">{item.type}</td>
                  <td className="py-4 px-4">{item.duration}</td>
                  <td className="py-4 px-4">{item.mode}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase ${getStatusColor(item.status)}`}>
                      <span className="w-1 h-1 rounded-full bg-current"></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => router.push('/capacity-building/details')}
                      className="text-[#384295] hover:text-[#14ADD6] font-bold text-[11px] transition-colors"
                    >
                      View details
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