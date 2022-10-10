import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quizs = () => {
  const quizDatas = useLoaderData();
  console.log(quizDatas.data);
  const { name, logo, total, questions } = quizDatas.data;
  return (
    <div className="text-center my-2">
      <header>
        <img className="mx-auto" src={logo} alt="" />
        <h1 className="text-5xl text-center">{name}</h1>
        <p className="py-2">
          Questions number: <span>{total}</span>
        </p>
      </header>
      <div>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quizs;
