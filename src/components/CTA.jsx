import { useNavigate } from "react-router";
import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTA = () => {
  const history = useNavigate();
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <motion.div
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
          <h2 className={styles.heading2__white}>
            Experience our exceptional service firsthand. Try it now!
          </h2>
        </motion.div>
        <p
          className={`${styles.paragraph__white} max-w-[470px] mt-5 text-black`}
        >
          Ready to revolutionize your brand? Let's embark on a journey to
          success together. Contact Mella now and witness the transformation.
        </p>
      </div>

      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
        onClick={() => history("/contact")}
      >
        <Button />
      </div>
    </section>
  );
};

export default CTA;
