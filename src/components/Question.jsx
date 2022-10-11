import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Options from "./Options";

const Question = ({ questions }) => {
  const { id, question, correctAnswer, options } = questions;
  const notify = () => toast(`Ans: ${correctAnswer}`);
  // console.log(questions);
  return (
    <div className="container  mx-auto p-5 mb-6 shadow-xl border rounded-2xl">
      <p onClick={notify} className=" text-sm text-right cursor-pointer">
        <FontAwesomeIcon icon="fa-duotone fa-eye" /> Answer
      </p>
      <h2 className="text-2xl w-[75%] mx-auto">{question}</h2>

      <div className="grid grid-cols-2">
        {options.map((option) => (
          <Options key={id} correctAnswer={correctAnswer} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Question;
