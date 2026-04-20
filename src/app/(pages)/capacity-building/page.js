'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StatsGrid from '@/app/components/StatsGrid/StatsGrid';
import DataTable from '@/app/components/table/table';

const CapacityBuilding = () => {
  const router = useRouter();

  const columns = [
    "S/N", "Training Description", "Start Date", "Type", "Duration", "Mode", "Status"
  ];

  const formatStatus = (status) => {
    let color = "#515151";
    if (status === "Inprogress") color = "#F29425";
    if (status === "Completed") color = "#10A142";

    return (
      <span style={{ color: color, fontWeight: "" }}>
        {status}
      </span>
    );
  };

  const [trainings] = useState([
    { sn: '01', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '3days', mode: 'Physical', status: formatStatus('Inprogress') },
    { sn: '02', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '2weeks', mode: 'Online', status: formatStatus('To-do') },
    { sn: '03', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '3days', mode: 'Physical', status: formatStatus('Completed') },
    { sn: '04', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '3days', mode: 'Physical', status: formatStatus('Completed') },
    { sn: '05', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Indiv', dur: '1week', mode: 'Online', status: formatStatus('Completed') },
    { sn: '06', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '5days', mode: 'Physical', status: formatStatus('Completed') },
    { sn: '07', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '3days', mode: 'Physical', status: formatStatus('Completed') },
    { sn: '08', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '2days', mode: 'Online', status: formatStatus('Completed') },
    { sn: '09', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '1month', mode: 'Physical', status: formatStatus('Completed') },
    { sn: '10', desc: 'Staff Health and Safety Training', date: '03/12/2022', type: 'Team', dur: '3weeks', mode: 'Physical', status: formatStatus('Completed') },
  ]);

  return (
    <div className="p-0 w-full max-w-[1600px] mx-auto space-y-8" dir="ltr">
      <StatsGrid stats={[
        { label: 'Total training request', value: '350', bgColor: 'bg-[#EBF5FF]', iconColor: 'text-[#3B82F6]' },
        { label: 'Total staff trained', value: '800', bgColor: 'bg-[#FFF4EB]', iconColor: 'text-[#F59E0B]' },
        { label: 'Total training done', value: '300', bgColor: 'bg-[#F5EBFF]', iconColor: 'text-[#8B5CF6]' },
        { label: 'Staff training rate', value: '70%', bgColor: 'bg-[#FFFBEB]', iconColor: 'text-[#FACC15]' },
      ]} />

      <div className="bg-white p-6 rounded-2xl flex justify-between items-center border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">Training request</h2>
        <button
          onClick={() => router.push('/capacity-building/request')}
          className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-xl font-normal transition-opacity hover:opacity-90 
             flex items-center justify-center
             w-[250px] h-[46px] text-[14px] leading-[24px]"
        >
          <span className="w-[143px] h-[24px] flex items-center justify-center">
            Make Training Request
          </span>
        </button>
      </div>

      <div className="w-full 
        [&_th]:font-extrabold 
        [&_th]:text-#515151 
        [&_th]:capitalize 
        [&_th]:text-left

        [&_.flex.items-center.gap-2]:hidden">

        <DataTable
          title="All Trainings"
          columns={columns}
          data={trainings}
          onViewMore={() => router.push('/capacity-building/details')}
        />
      </div>
    </div>
  );
};

export default CapacityBuilding;