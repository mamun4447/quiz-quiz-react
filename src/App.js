import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routs";

  function App() {
    return <RouterProvider router={router}></RouterProvider>;
  }

export default App;
