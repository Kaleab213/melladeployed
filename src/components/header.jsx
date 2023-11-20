import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BecomeAMember from "./BecomeAMember";
import Model from "react-modal";

export default function Header() {
  const [clientY, setclientY] = useState(700);
  const [clientX, setclientX] = useState(700);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    document.getElementById("header").addEventListener("mousemove", (e) => {
      setclientX(e.clientX);
      setclientY(e.clientY);
    });
  });

  return (
    <div>
      <div className="">
        <div
          className="relative h-[35rem] w-full overflow-hidden flex items-end"
          id="header"
        >
          <motion.img
            className="absolute bottom-0 left-0 right-0 h-[100%] w-[100%]"
            src="./assets/Asset16.png"
            alt="backgrund c"
          />

          <div className="tree-and-leftrightmount absolute bottom-0  w-full md:h-[40%] h-[20%]">
            <motion.img
              className="absolute bottom-[85%] left-[8%] right-[60%] h-[100%]"
              animate={{
                x: 0 + (700 - clientX) / 40,
                y: 0 + (700 - clientY) / 40,
              }}
              src="./assets/ConstantinLogoOnly.svg"
              alt="backgrund c"
            />
            <motion.img
              className="absolute bottom-0 right-[7%] h-[95%] w-[100%]"
              animate={{
                x: 0 + (700 - clientX) / 30,
                y: 0 + (700 - clientY) / 30,
              }}
              src="./assets/Asset21.png"
              alt="backgrund f"
            />
          </div>

          <div className="Cloude-and-midMount ">
            <motion.img
              className="absolute bottom-[60%] left-[30%] right-[50%] h-[8rem] "
              animate={{
                x: 0 + (700 - clientX) / 20,
                y: 0 + (700 - clientY) / 20,
              }}
              src="./assets/Asset10.png"
              alt="backgrund asset"
            />

            <motion.img
              className="absolute bottom-[35%] left-[55%] right-[20%] h-[8rem]"
              animate={{
                x: 0 + (700 - clientX) / 20,
                y: 0 + (700 - clientY) / 20,
              }}
              src="./assets/Asset10.png"
              alt="backgrund asset"
            />

            <motion.img
              className="absolute bottom-0 left-[5%] h-[40%]"
              animate={{
                x: 0 + (700 - clientX) / 30,
                y: 0 + (700 - clientY) / 30,
              }}
              src="./assets//Header/1x/Asset 4.png"
              alt="backgrund c"
            />
          </div>

          <motion.div className="absolute bottom-0  w-full md:h-[50%] h-[25%]">
            <motion.img
              className="absolute bottom-0 h-[90%] w-[100%] left-[3rem]"
              animate={{
                x: 0 + (700 - clientX) / 50,
                y: 0 + (700 - clientY) / 50,
              }}
              src="./assets//Header/1x/Asset 2.png"
              alt="backgrund f"
            />
            <motion.div className="absolute bottom-0  w-[100%] -mt-[5rem] h-[3rem] bg-white"></motion.div>
          </motion.div>

          <motion.header className="absolute top-[25%] left-0 right-0 h-[100%] w-[100%]">
            <div className="relative">
              <div className="container flex justify-end">
                <div className="w-[60%]">
                  <div className="flex flex-col ml-auto p-3">
                    <h1 className=" mb-4 text-center text-3xl font-bold text-customLightGreen -mr-[4%]">
                      About-<span className="text-customOrange">Us</span>
                    </h1>
                    <div className="flex justify-end -ml-[8%]">
                      <p className="mb-4 sm:text-left text-center font-sans font-bold lg:w-[50%] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore est quisquam totam vel rerum omnis, officiis
                        aspernatur architecto, doloremque tenetur nihil rem
                        harum consequatur animi! Consequatur magni odit voluptas
                        aliquam.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        id="bemember"
                        className="bg-customLightGreen hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-[4rem]"
                        onClick={() => setVisible(true)}
                      >
                        Become A Member
                      </button>

                      <Model
                        isOpen={isVisible}
                        onRequestClose={() => setVisible(false)}
                      >
                        {/* <div className="relative"> */}
                        {/* <button
                              className="text-2xl absolute top-0 right-0 bg-green-500 rounded-full"
                              onClick={() => {
                                setVisible(false);
                              }}
                            >
                              <img src="./assets/closeIcon.png" alt="" />
                            </button> */}
                        <BecomeAMember />
                        {/* </div> */}
                      </Model>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        </div>
      </div>
    </div>
  );
}
