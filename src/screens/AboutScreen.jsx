import React, { useState } from 'react';
import PurposeSlideFromBottom from '../components/PurposeSlide';
import Navbar from '../components/Navbar';
import owner from '../assets/owner.jpg';
import map from '../assets/map.jpg';
import { Footer } from '../components';
import styles from '../style.js';

export default function AboutUs() {
  const [clientY, setclientY] = useState(700);
  const [clientX, setclientX] = useState(700);
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div
        className="text-poppins flex justify-between items-center h-fit-content"
        style={{ background: 'rgba(0, 0, 0, 0.93)' }}
      >
        <Navbar />
      </div>
      <div
        style={{ background: '#E9EFEA' }}
        className="font-poppins text-dimWhite  flex-col justify-center items-center  overflow-x-hidden"
      >
        <div className="flex justify-center items-center">
          <div className="pb-[3rem] sm:pb-[5rem] bg-[#E9EFEA] pt-[6rem] text-center">
            {/* <h1 className="text-[5rem] font-thin font-Culpa text-primary"> */}
            <h1 className="text-4xl font-bold font-poppins sm:text-5xl text-primary">
              Trusted{' '}
            </h1>
            <h1 className="text-4xl font-bold font-poppins sm:text-5xl text-primary mb-[2rem]">
              By our clients
            </h1>
            <div className="flex justify-center">
              <p className={`${styles.paragraph__white}`}>
                Elevate your brand. Ignite growth. Unleash potential. Experience
                marketing excellence with Mella.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-b-1 border-primary w-[70%] mx-auto" />

        <PurposeSlideFromBottom />

        <div className="my-[8rem] bg-primary text-tertiary flex flex-col items-center">
          <div className="sm:flex-row mx-[20%] py-[3rem] w-[60%]">
            <div className="flex justify-center items-center flex-wrap mb-[5rem]">
              <h1 className={`${styles.heading2} text-center`}>The Founder</h1>
              <h5
                className={`${styles.paragraph} w-full text-center text-green`}
              >
                What we do is not for us but for the world
              </h5>
            </div>
            <div className="flex sm:flex-row flex-col relative justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  src={owner}
                  alt=""
                  className="w-[300px] h-[300px] rounded-lg shadow-lg"
                />
              </div>

              <div className="flex justify-center items-center sm:w-[50%]">
                <div className="flex flex-col sm:w-[20rem] md:w-[30rem] p-3 justify-center items-center">
                  <h1 className={`mb-[2rem] text-center  ${styles.heading3}`}>
                    Sir George
                  </h1>
                  <div className="w-[80vw] sm:w-full">
                    <p
                      className={`${styles.paragraph} sm:ml-[5rem] mb-[2rem] text-center sm:text-center font-sans sm:w-[80rem] max-w-[90%] line-height-[2]`}
                    >
                      "Success in marketing lies not only in reaching customers
                      but in truly connecting with them. Our mission is to
                      create meaningful experiences that inspire, engage, and
                      leave a lasting impact. Together, let's redefine what's
                      possible and make every campaign a masterpiece."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-primary">
          <div className="flex justify-center items-center flex-wrap mt-[5rem] mb-[3rem] sm:mb-[5rem] ">
            <h1 className={`w-[80%] text-center ${styles.heading2__white}`}>
              Countries We Are Active
            </h1>
            <h5 className={`w-full text-center ${styles.paragraph__white}`}>
              Parts of the world we are actively working on
            </h5>
          </div>
          <div className="flex flex-col items-center sm:flex-row  m-[10%] mt-[5%] sm:m-[2%] mb-[2rem]">
            <div className="flex w-5/2 sm:w-1/2 md:w-2/3 py-3 px-0 text-center items-center justify-center md:p[0]">
              <img
                src={map}
                className="p-2 rounded-lg shadow-lg w-4/5"
                alt="highlight map of countries we are working"
              />
            </div>
            <div className="flex flex-col ml-4 sm:w-2/3 md:w-1/3 p-3">
              <h1
                className={`mb-[2rem] text-center sm:text-left ${styles.heading3__white}`}
              >
                Our projects
              </h1>
              <p
                className={`mb-[2rem] text-center sm:text-left text-primary ${styles.paragraph__white}`}
              >
                "Our projects till now have been dedicated to making a
                meaningful difference in both Ethiopia and Uganda. We have been
                actively implementing initiatives that aim to address crucial
                challenges and promote positive change in these nations. Our
                work reflects a commitment to sustainable development, social
                impact, and the betterment of communities in both Ethiopia and
                Uganda
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-[3rem]"></div>
        <Footer />
      </div>
    </>
  );
}
