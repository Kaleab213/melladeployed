import React from "react";
import { motion } from "framer-motion";

const LeftCard = ({ data }) => {
  return (
    <>
      <div className={`flex w-full text-white gap-2 items-center h-[20rem]`}>
        <img
          src={data.image}
          alt="lefteventimage"
          className=" object-cover rounded-lg h-full w-full"
        />
      </div>
    </>
  );
};

export default LeftCard;
