import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

export const DataContext = createContext([]);

const Main = () => {
  const dataset = useLoaderData();
  return (
    <DataContext.Provider value={dataset.data}>
      <Header />
      <Outlet />
    </DataContext.Provider>
  );
};

export default Main;
