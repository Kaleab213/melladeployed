import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../style.js";

export default function PurposeSlideFromBottom() {
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".slide-from-bottom");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="px-[2%] text-white bg-[#E9EFEA] mt-[1s%]">
      <motion.div
        className="mt-[3rem] sm:mt-[5rem] slide-from-bottom flex justify-center items-center flex-wrap mb-[40px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* <h1 className="w-full text-center text-[3rem] text-primary"> */}
        <h1 className={`${styles.heading2__white} text-center`}>Our Mission</h1>
        <h5 className={`${styles.paragraph__white} text-center w-[30rem]`}>
          Through tailored services and products, we streamline processes,
          optimize efficiency, and drive exponential growth for our clients.
        </h5>
      </motion.div>

      <motion.div className="slide-from-bottom grid grid-cols-1 gap-4 text-white md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="slide-from-bottom bg-green rounded-2xl border pb-8 bg-primary"
          style={{ boxShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0,
            },
          }}
        >
          <h1 className="px-4 md:px-6 mb-4 mt-2 md:mb-8 md:mt-4 text-[2rem] flex justify-start">
            Empowering Growth
          </h1>
          <p
            className={`px-4 md:px-6 font-auto text-[18px] lgg:text-[20px] text-dimWhite`}
          >
            We are dedicated to empowering businesses with innovative marketing
            strategies, driving growth, and unlocking their true potential in
            today's dynamic market.
          </p>
        </motion.div>
        <motion.div
          className="slide-from-bottom bg-green rounded-2xl border pb-8 bg-primary"
          style={{ boxShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.5,
            },
          }}
        >
          <h1 className="px-4 md:px-6 mb-4 mt-2 md:mb-8 md:mt-4 text-[2rem]">
            Unleashing Creativity
          </h1>
          <p
            className={`px-4 md:px-6 font-auto text-[18px] lgg:text-[20px] text-dimWhite`}
          >
            Our mission is to unleash the power of creativity, crafting
            captivating campaigns that resonate with audiences, inspire action,
            and elevate brands to new heights.
          </p>
        </motion.div>
        <motion.div
          className="slide-from-bottom bg-green rounded-2xl border pb-8 bg-primary"
          style={{ boxShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 1,
            },
          }}
        >
          <h1 className="px-4 md:px-6 mb-4 mt-2  md:mb-8 md:mt-4 text-[2rem]">
            Building Lasting Connections
          </h1>
          <p
            className={`px-4 md:px-6 font-auto text-[18px] lgg:text-[20px] text-dimWhite`}
          >
            At the core of our mission is building authentic connections. We
            foster meaningful relationships between brands and their audiences,
            fostering loyalty, trust, and lasting success.
          </p>
        </motion.div>
        <motion.div
          className="slide-from-bottom bg-green rounded-2xl border pb-8 bg-primary"
          style={{ boxShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
          initial={{
            y: 150,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 1.5,
            },
          }}
        >
          <h1 className="px-4 md:px-6 mb-4 mt-2 md:mb-8 md:mt-4 text-[2rem] flex">
            Driving Digital Transformation
          </h1>
          <p
            className={`px-4 md:px-6 font-auto text-[18px] lgg:text-[20px] text-dimWhite`}
          >
            As pioneers of digital transformation, our mission is to navigate
            businesses through the ever-evolving digital landscape. We leverage
            cutting-edge technologies to deliver exceptional results and stay
            ahead of the curve.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
