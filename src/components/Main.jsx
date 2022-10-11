import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Header from "./Header";

export const DataContext = createContext([]);

const Main = () => {
  const dataset = useLoaderData();
  return (
    <DataContext.Provider value={dataset.data}>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </DataContext.Provider>
  );
};

export default Main;
