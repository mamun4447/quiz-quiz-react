import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { DataContext } from "./Main";

const Statistics = () => {
  const data = useContext(DataContext);
  // console.log(data);
  return (
    <div className="lg:mt-10 lg:ml-64">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis dataKey="total" stroke="#8884d8" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Statistics;
