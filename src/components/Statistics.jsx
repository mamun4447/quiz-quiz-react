import React, { useContext } from "react";
import { DataContext } from "./Main";

const Statistics = () => {
  const data = useContext(DataContext);
  // console.log(data);
  return <div>Statistics{data.length}</div>;
};

export default Statistics;
