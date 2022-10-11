import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handledClick = (value, correctAnswer) => {
  if (value === correctAnswer) {
    // console.log("right");
    toast.success("Right answer!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } else {
    toast.warn("Wrong answer!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

const Options = ({ option, correctAnswer }) => {
  return (
    <div
      onClick={() => handledClick(option, correctAnswer)}
      className="border border-spacing-5 p-2 my-4 mx-2 shadow-xl rounded-xl items-center text-center cursor-pointer"
    >
      <p className="py-3">{option}</p>
    </div>
  );
};

export default Options;
