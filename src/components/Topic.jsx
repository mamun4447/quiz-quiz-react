import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ data }) => {
  //   console.log(data);
  const { id, logo, name, total } = data;
  return (
    <div className="mx-3 lg:col-span-2">
      <div className="card w-full  bg-base-100 shadow-xl image-full">
        <figure>
          <img className="bg-black" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body mt-12 ml-12">
          <h2 className="card-title text-4xl ">{name}</h2>
          <p>
            Number of questions:<span className="text-xl"> {total}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`../topics/${id}`} className="btn btn-primary">
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
