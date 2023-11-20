import { quotes } from "../assets";
import Avatar from "./Avatar";
import { motion } from "framer-motion";
import { ParallaxText } from "./Hero";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex justify-between flex-col p-5 rounded-[20px]  max-w-[350px] max-h-[fit-content] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card sm:px-16 px-6"
    style={{ backgroundColor: "white" }}
  >
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <Avatar />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
