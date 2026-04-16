"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend), { ssr: false });

const data = [
  { name: 'Jan', netSalary: 280000, loan: 0, tax: 60000 },
  { name: 'Feb', netSalary: 380000, loan: 40000, tax: 100000 },
  { name: 'Mar', netSalary: 370000, loan: 0, tax: 100000 },
  { name: 'Apr', netSalary: 310000, loan: 0, tax: 90000 },
  { name: 'May', netSalary: 310000, loan: 50000, tax: 60000 },
  { name: 'Jun', netSalary: 300000, loan: 0, tax: 60000 },
  { name: 'Jul', netSalary: 410000, loan: 0, tax: 70000 },
  { name: 'Aug', netSalary: 360000, loan: 0, tax: 50000 },
  { name: 'Sep', netSalary: 280000, loan: 0, tax: 40000 },
  { name: 'Oct', netSalary: 450000, loan: 0, tax: 70000 },
  { name: 'Nov', netSalary: 410000, loan: 0, tax: 60000 },
  { name: 'Dec', netSalary: 420000, loan: 60000, tax: 90000 },
];

const formatYAxis = (value) => {
  if (value === 0) return "0k";
  return `${value / 1000}k`;
};

export default function Payroll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white p-10 rounded-[30px] w-full font-sans shadow-sm border border-gray-50">

      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#14ADD6" />
            <stop offset="100%" stopColor="#384295" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="text-[24px] text-[#1a1a1a] mb-[30px] font-bold">
        Annual payroll summary
      </h2>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barSize={16}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#000000', fontSize: 13 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxis}
              tick={{ fill: '#000000', fontSize: 13 }}
              domain={[0, 600000]}
              ticks={[0, 200000, 300000, 400000, 500000, 600000]}
            />

            <Tooltip
              cursor={{ fill: '#F9FAFB' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingBottom: '30px', color: '#000000', fontSize: '14px' }}
            />

            <Bar dataKey="netSalary" name="Net salary" stackId="payroll" fill="url(#salaryGradient)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="tax" name="Tax" stackId="payroll" fill="#F59E0B" />
            <Bar dataKey="loan" name="Loan" stackId="payroll" fill="#A855F7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

