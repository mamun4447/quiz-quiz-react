import React from "react";

const Topic = ({ data }) => {
  console.log(data);
  const { logo, name, total } = data;
  return (
    <div className="col-span-2">
      <div className="card w-full  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body mt-12 ml-12">
          <h2 className="card-title text-4xl ">{name}</h2>
          <p>
            Number of questions:<span className="text-xl"> {total}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
