import React, { useContext } from "react";
import { DataContext } from "./Main";
import Topic from "./Topic";

const Topics = () => {
  const datas = useContext(DataContext);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 mt-32">
      <h1 className="">All Topics-</h1>
      {datas.map((data) => (
        <Topic key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Topics;
