import React, { useContext } from "react";
import { DataContext } from "./Main";
import Topic from "./Topic";

const Topics = () => {
  const datas = useContext(DataContext);
  return (
    <div className="mt-32 my-10 container mx-auto">
      <h1 className="text-4xl my-5 mx-4 container">All Topics-</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4  gap-4 ">
        {datas.map((data) => (
          <Topic key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
