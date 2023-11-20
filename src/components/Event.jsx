// import data from "../data.js";
import LeftCard from "./LeftCard";
import { motion } from "framer-motion";
import React from "react";
import data from "./data";
function Event() {
  return (
    <div className={"flex flex-col "}>
      <motion.div
        className="flex h-full pl-[3rem] gap-10 pb-10"
        initial={{
          x: 250,
        }}
        whileInView={{
          x: 0,
          transition: {
            duration: 1,
            delay: 0,
          },
        }}
        viewport={{ once: true }}
        // style={{ backgroundColor: "#7dbf72" }}
      >
        {data.map((data) => {
          return (
            <motion.div
              className="w-[20rem] flex-none mr-[2rem]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <LeftCard data={data} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Event;
