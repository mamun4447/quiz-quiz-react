import React from "react";
import Options from "./Options";

const Question = ({ questions }) => {
  //   console.log(questions);
  const { id, question, correctAnswer, options } = questions;
  return (
    <div className="container  mx-auto p-5 mb-6 shadow-xl border rounded-2xl">
      <h2 className="text-2xl">{question}</h2>
      <div className="grid grid-cols-2">
        {options.map((option) => (
          <Options key={id} correctAnswer={correctAnswer} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Question;
