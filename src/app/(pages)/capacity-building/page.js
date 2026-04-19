'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import StatsGrid from '@/app/components/StatsGrid/StatsGrid';
import DataTable from "@/app/components/table/table";

const CapacityBuilding = () => {
  const router = useRouter();
  const [trainings, setTrainings] = useState([]);

  // 1. تعريف أعمدة الجدول كما طلبت
  const columns = [
    "S/N", 
    "Training Description", 
    "Start Date", 
    "Type", 
    "Duration", 
    "Mode", 
    "Status"
  ];

  useEffect(() => {
    // 2. البيانات التي طلبت وضعها في الجدول
    const defaultData = [
      { sn: '01', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3days', mode: 'Physical', status: 'Inprogress' },
      { sn: '02', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '2weeks', mode: 'Online', status: 'To-do' },
      { sn: '03', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3days', mode: 'Physical', status: 'Completed' },
      { sn: '04', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3days', mode: 'Physical', status: 'Completed' },
      { sn: '05', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Individual', duration: '1week', mode: 'Online', status: 'Completed' },
      { sn: '06', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '5days', mode: 'Physical', status: 'Completed' },
      { sn: '07', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3days', mode: 'Physical', status: 'Completed' },
      { sn: '08', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '2days', mode: 'Online', status: 'Completed' },
      { sn: '09', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '1month', mode: 'Physical', status: 'Completed' },
      { sn: '10', description: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', duration: '3weeks', mode: 'Physical', status: 'Completed' },
    ];

    const savedData = JSON.parse(localStorage.getItem('trainings') || '[]');
    // دمج البيانات المحفوظة مع البيانات الافتراضية
    setTrainings([...defaultData, ...savedData]);
  }, []);

  // وظيفة الانتقال لصفحة التفاصيل عند الضغط على View More
  const handleViewMore = (row) => {
    router.push('/capacity-building/details');
    console.log("Viewing details for:", row);
  };

  const myStats = [
    { label: 'Total training request', value: '350', bgColor: 'bg-[#EBF5FF]', iconColor: 'text-[#3B82F6]' },
    { label: 'Total staff trained', value: '800', bgColor: 'bg-[#FFF4EB]', iconColor: 'text-[#F59E0B]' },
    { label: 'Total training done', value: '300', bgColor: 'bg-[#F5EBFF]', iconColor: 'text-[#8B5CF6]' },
    { label: 'Staff training rate', value: '70%', bgColor: 'bg-[#FFFBEB]', iconColor: 'text-[#FACC15]' },
  ];

  return (
    <div className="p-0 w-full max-w-[1600px] mx-auto space-y-8" dir="ltr">
      {/* قسم الإحصائيات */}
      <div>
        <StatsGrid stats={myStats} />
      </div>

      {/* قسم زر إنشاء طلب جديد */}
      <div className="bg-white p-6 rounded-2xl flex justify-between items-center border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">Training request</h2>
        <button
          onClick={() => router.push('/capacity-building/request')}
          className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Make Training Request
        </button>
      </div>

      {/* استدعاء كومبوننت الجدول الذي أنشأته سابقاً */}
      <div className="w-full">
        <DataTable 
          title="All Trainings"
          columns={columns}
          data={trainings}
          onViewMore={handleViewMore}
        />
      </div>
    </div>
  );
};

export default CapacityBuilding;