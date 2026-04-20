import React from 'react';
import { ImStatsBars2 } from "react-icons/im";


const StatCard = ({ value, label, bgColor, iconColor, Icon = ImStatsBars2 }) => (
  <div className="bg-white p-6 md:p-10 lg:p-12 text-left rounded-2xl flex justify-between items-center border border-gray-100 transition-colors hover:bg-gray-50">
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">{value}</h3>
      <p className="text-black text-[13px] font-medium mt-0.5">
        {label}
      </p>
    </div>
    <div className={`p-3 rounded-xl ${bgColor}`}>
      <Icon className={`${iconColor} text-lg`} />
    </div>
  </div>
);


const StatsGrid = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, i) => (
        <StatCard 
          key={i}
          value={stat.value}
          label={stat.label}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
          Icon={stat.icon} 
        />
      ))}
    </div>
  );
};

export default StatsGrid;