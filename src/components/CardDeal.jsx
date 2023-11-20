import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import anders from "../assets/cardeal.jpg";
import { motion } from "framer-motion";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2__white}>
          Discover an exceptional card deal in just a few simple steps{" "}
          <strong class="bold-text-30 text-[#F4CE14]">.</strong>
        </h2>
        <p
          className={`${styles.paragraph__white} max-w-[470px] mt-5 text-black`}
        >
          Unleash the power of our exclusive Card Deal. Elevate your marketing
          game with a handpicked selection of strategies tailored just for you.
          It's not just a deal; it's a game-changer.
        </p>
      </div>

      <motion.div
        className={layout.sectionImg}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              restDelta: 0.001,
            },
          },
        }}
      >
        <img
          src={anders}
          alt="billing"
          className="w-[100%] h-[100%] rounded-xl"
        />
      </motion.div>
    </div>
  </section>
);

export default CardDeal;
