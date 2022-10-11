import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quizs = () => {
  const quizDatas = useLoaderData();
  // console.log(quizDatas.data);
  const { name, logo, total, questions } = quizDatas.data;
  return (
    <div className="text-center my-2 w-[75%] lg:w-[50%] mx-auto">
      <header>
        <img
          className="mx-auto bg-black rounded-3xl"
          src={logo}
          alt="Logo of topic"
        />
        <h1 className="text-5xl text-center">Quiz of {name}</h1>
        <p className="py-2">
          Questions number: <span>{total}</span>
        </p>
      </header>
      <div>
        {questions.map((question) => (
          <Question key={question.id} questions={question} />
        ))}
      </div>
    </div>
  );
};

export default Quizs;
