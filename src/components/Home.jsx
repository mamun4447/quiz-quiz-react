import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import Topics from "./Topics";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Practice makes a man <br className="hidden md:block" /> Perfect{" "}
              <span className="inline-block text-blue-400">before he dies</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Practice makes a man perfect is a proverb which tells us the
              importance of continuous practice in any subject to learn
              anything. There is no alternate to the hard work and success. We
              must have to practice in the particular field on regular basis in
              which we want to succeed.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/topics"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Satr Quiz</span>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
      <Topics />
    </div>
  );
};

export default Home;
