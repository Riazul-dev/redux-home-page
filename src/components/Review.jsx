import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Review() {
  return (
    <div className="inline-flex flex-col justify-center">
      <div className="flex items-center">
        <span className="border-r-2 border-white text-white text-xl pr-2 md:pr-4">4.5 </span>
        <span className="text-yellow-500 flex justify-center items-center gap-2 px-2 md:px-4 text-[20px]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
      </div>
      <div>
        <span className="text-white">(11.6K Total Review)</span>
      </div>
    </div>
  );
}

export default Review;
