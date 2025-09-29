import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis, Rectangle } from "recharts";

const MarkCharts = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  // console.log(marksDataRes);
  const marksData = marksDataRes.data;
  // console.log(marksData);

  // data processing for chart
  const marksChartData = marksData.map((studnetData) => {
    const student = {
      id: studnetData.id,
      name: studnetData.name,
      physics: studnetData.marks.physics,
      chemistry: studnetData.marks.chemistry,
      math: studnetData.marks.math,
    };

    const avg = (student.physics + student.math + student.chemistry) / 3;
    student.avg = avg;

    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
         <Bar dataKey="math" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
         <Bar dataKey="chemistry" fill="yellow" activeBar={<Rectangle fill="pink" stroke="blue" />} />
         <Bar dataKey="physics" fill="red" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
    </div>
  );
};

export default MarkCharts;
