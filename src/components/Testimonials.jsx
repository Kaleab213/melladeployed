import { motion } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { ParallaxText } from "./Hero";

const AnimatedCard = motion(FeedbackCard);

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Their words, not ours</h2>
      <div className="w-full md:mt-0 mt-6">
        <p
          className={`${styles.paragraph} text-left text-[20px] max-w-[450px]`}
        >
          Hear it from our partners:
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <AnimatedCard
          key={card.id}
          {...card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
