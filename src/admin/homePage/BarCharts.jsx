import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarCharts() {
  const data = [
    { name: "জানুয়ারি", uv: 4000, pv: 2400 },
    { name: "ফেব্রুয়ারি", uv: 3000, pv: 1398 },
    { name: "মার্চ", uv: 2000, pv: 9800 },
    { name: "এপ্রিল", uv: 2780, pv: 3908 },
    { name: "মে", uv: 1890, pv: 4800 },
    { name: "জুন", uv: 2390, pv: 3800 },
    { name: "জুলাই", uv: 3490, pv: 4300 },
  ];

  return (
    <div style={{ width: "100%", height: 400, background: "white" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="pv" fill="#0984e3" />
          <Bar dataKey="uv" fill="#00b894" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
