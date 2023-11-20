import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import anders from "../assets/billing.jpg";
import { motion } from "framer-motion";

const Billing = () => (
  <section
    id="product"
    className={`layout.sectionReverse flex md:flex-row flex-col-reverse ${styles.paddingY} my-[5rem]`}
  >
    <motion.div
      className={layout.sectionImgReverse}
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
            stiffness: 50,
            restDelta: 0.001,
          },
        },
      }}
    >
      <img
        src={anders}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-xl"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <div className={layout.sectionInfo}>
      <div className={`${styles.heading2} sm:mb-5`}>
        <h2 className={styles.heading2}>
          Master billing and Invoicing with ease{" "}
          <strong class="bold-text-30 text-[#F4CE14]">.</strong>
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With Mella, transparency meets efficiency. Our billing process is
        seamless, providing you with clarity and confidence. No hidden costs,
        just straightforward excellence.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
