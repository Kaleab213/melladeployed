import React from "react";
import styles from "../style.js";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
} from "../components/index.js";
import Hero, { ParallaxText } from "../components/Hero.jsx";
import video from "../images/video.mp4";
import vanillastyle from "../stylecss.module.css";
import Event from "../components/Event.jsx";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-x-hidden">
      <div className={vanillastyle.ahero}>
        <video autoPlay loop muted playsInline className={vanillastyle.avid}>
          <source src={video} type="video/mp4"></source>
        </video>
        <div className={`${vanillastyle.anav}`}>
          <Navbar />
        </div>
        <div className={vanillastyle.headiv}>
          <Hero />
        </div>
        <p className={`max-w-[700px] mt-5 ${vanillastyle.headp}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={`bg-primary`}>
        <div
          style={{
            display: "flex",
            flexWrap: "auto",
            justifyContent: "center",
            height: "fit-content",
            marginTop: "5rem",
          }}
        >
          <Stats />
        </div>

        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <Business />
          </div>
        </div>

        <div className="py-[5rem] bg-tertiary">
          <h1
            className={`${styles.heading2__white} flex justify-center mb-[2rem]`}
          >
            Our Clients
          </h1>
          <ParallaxText baseVelocity={1}>
            <Event />
          </ParallaxText>
        </div>

        <div className={`bg-primary ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <Billing />
          </div>
        </div>

        <div className={`bg-tertiary ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <CardDeal />
          </div>
        </div>

        <div className={`bg-primary  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}  ${styles.paddingX}`}>
            <Testimonials />
          </div>
        </div>

        <div className={`bg-tertiary ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}  ${styles.paddingX}`}>
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
