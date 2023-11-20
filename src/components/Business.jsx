import { features } from '../constants';
import styles, { layout } from '../style';
import Avatar from './Avatar';
import Button from './Button';
import { motion } from 'framer-motion';
import animStyles from '../Animation.css';
import { useNavigate } from 'react-router';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col md:flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Avatar />
    </div>
    <div className="flex-1 flex flex-col md:ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] md:text-[20px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[rgba(255, 255, 255, 0.24)] text-[16px] md:text-[18px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const history = useNavigate();
  function handleClick(link) {
    window.scrollTo(0, 0);
    return history('/contact');
  }
  return (
    <section id="features" className={`layout.section py-10 sm:py-20`}>
      <div className="flex flex-col sm:flex-row py-5 sm:py-0">
        <div className={layout.sectionInfo}>
          <div className={`${styles.heading2} sm:mb-5 ${animStyles.box}`}>
            Focus on the Business We'll manage the money{' '}
            <p className={`${styles.paragraph} max-w-[470px] mb-5`}>
              At Mella, we redefine marketing. Our strategies go beyond
              boundaries, ensuring your brand not only stands out but dominates
              the market. Discover a new era of business success.
            </p>
          </div>

          <div onClick={() => handleClick()}>
            <Button styles={`mt-10`} />
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col mt-10 sm:mt-0`}>
          {features.map((feature, index) => (
            <motion.div
              className={`${styles.heading2} sm:mb-5 ${animStyles.box}`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                },
              }}
            >
              <FeatureCard key={feature.id} {...feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
