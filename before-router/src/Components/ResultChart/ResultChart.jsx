import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "King Shohan",
    Physics: 80,
    Chemistry: 82,
    Math: 78,
    English: 85,
    Biology: 90,
    History: 75,
  },
  {
    name: "Shohan",
    Physics: 90,
    Chemistry: 85,
    Math: 78,
    English: 95,
    Biology: 80,
    History: 85,
  },
  {
    name: "G. Rajesh",
    Physics: 40,
    Chemistry: 33,
    Math: 47,
    English: 55,
    Biology: 67,
    History: 52,
  },
  {
    name: "P. Pal",
    Physics: 78,
    Chemistry: 56,
    Math: 99,
    English: 78,
    Biology: 69,
    History: 30,
  },
  {
    name: "P. fal",
    Physics: 78,
    Chemistry: 56,
    Math: 99,
    English: 98,
    Biology: 96,
    History: 65,
  },
  {
    name: "P. gal",
    Physics: 78,
    Chemistry: 56,
    Math: 99,
    English: 68,
    Biology: 45,
    History: 98,
  },
];
const ResultChart = () => {
  return (
    <div className="border">
      <LineChart width={500} height={300} data={data}>
        <Line dataKey="Math" />
        <Line dataKey="Physics" />
        <Line dataKey="Chemistry" />
        <Line dataKey="English" />
        <Line dataKey="Biology" />
        <Line dataKey="History" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default ResultChart;
