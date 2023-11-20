import { Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "../style";
// import { Text, Input } from "@chakra-ui/react";

const CustomerInput = ({ question, name, sendEmail }) => {
  const form = useRef();

  return (
    <>
      {/* <form className="mt-[2rem]" action="/send-email"> */}
      <form className="mt-[2rem]" action="/" onSubmit={sendEmail}>
        <label htmlFor="name">
          <div className="text-2xl sm:font-bold mb-5">{question}</div>
        </label>
        <Input
          type="text"
          name={name}
          id="name"
          variant="unstyled"
          placeholder="Jhon Doe*"
          fontSize={"xl"}
          color={"#e9efea"}
        />
        <input type="submit" value="Send" />
      </form>

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <input type="text" name="service" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <div
        style={{
          width: "50vw",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.16)",
          // margin: "1.5rem 0",
        }}
      ></div>
    </>
  );
};

export default CustomerInput;
