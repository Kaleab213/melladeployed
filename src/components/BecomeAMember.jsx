import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BecomeAMember() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNotEmptyName, setIsNotEmptyName] = useState(true);
  const [isusernameValid, setusernameValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedDate = Date.now();

  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const usernameRef = useRef();
  const dateofBirthRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();
  const adressRef = useRef();

  const handleDateChange = (date) => {
    // Perform any necessary operations with the selected date here
    console.log(date);
  };

  const handleReset = () => {
    // Clear input values
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    usernameRef.current.value = "";
    dateofBirthRef.current.value = "";
    genderRef.current.value = "";
    countryRef.current.value = "";
    adressRef.current.value = "";

    // Reset validity state variables
    setIsValidEmail(true);
    setIsNotEmptyName(true);
    setusernameValid(true);
  };

  const validateEmail = () => {
    const email = emailRef.current.value;
    // Regular expression to check the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const validateName = () => {
    setIsNotEmptyName("" !== fullNameRef.current.value);
  };

  const validateuserName = () => {
    setusernameValid("" !== usernameRef.current.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    validateEmail();
    validateName();
    validateuserName();

    // Check if the form is valid
    if (isValidEmail && isNotEmptyName && isusernameValid) {
      // Get form data
      const fullName = fullNameRef.current.value;
      const email = emailRef.current.value;
      const phoneNumber = phoneNumberRef.current.value;
      const username = usernameRef.current.value;
      const dateOfBirth = dateofBirthRef.current.value;
      const gender = genderRef.current.value;
      const country = countryRef.current.value;
      const address = adressRef.current.value;

      // Create a new subscriber object
      const newSubscriber = {
        fullName,
        email,
        phoneNumber,
        username,
        dateOfBirth,
        gender,
        country,
        address,
      };

      try {
        setIsSubmitting(true);

        // Make a POST request to the backend API endpoint
        const response = await fetch("/subscribers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSubscriber),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Subscriber created:", data);
          // Reset form fields
          handleReset();
        } else {
          const error = await response.json();
          console.error("Error creating subscriber:", error);
        }
      } catch (error) {
        console.error("Error creating subscriber:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative flex justify-center align-center items-center ">
      <div className="flex flex-col bg-gradient-radial from-green to-greenshade w-[90%] h-[50%] m-[2rem] rounded-[5rem]">
        <h1 className="text-center text-5xl text-white mt-[2rem]">
          Become A Member
        </h1>
        <div className="flex flex-col m-[4rem] bg-gradient-radial from-green to-greenshade">
          <div className="flex flex-col w-[100%] sm:flex-row md:flex-row">
            <div className="mr-[2rem]">
              <div className="w-[40%] mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                  className={`bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent ${
                    !isNotEmptyName && "border-2 border-red-500"
                  }`}
                  ref={fullNameRef}
                  onBlur={validateName}
                />
              </div>
              <div className="w-full mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="User Name"
                  className={`bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent
                ${!isusernameValid && "border-2 border-red-500"} `}
                  ref={usernameRef}
                  onBlur={validateuserName}
                />
              </div>
              <div className="w-full mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone Number"
                  className="bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent"
                  ref={phoneNumberRef}
                />
              </div>
              <div className="w-full mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Adress"
                  className="bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent"
                  ref={adressRef}
                />
              </div>
            </div>
            <div>
              <div className="w-full mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  className={`bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent ${
                    !isValidEmail && "border-2 border-red-500"
                  }`}
                  ref={emailRef}
                  onBlur={validateEmail}
                />
              </div>
              <div className="w-full mb-8">
                <DatePicker
                  placeholderText="Date of Birth"
                  className="bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent"
                  ref={dateofBirthRef}
                  selected={selectedDate}
                  onChange={handleDateChange} // Update the onChange event handler
                />
              </div>
              <div className="w-full mb-8">
                <select
                  className="bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none focus:placeholder-transparent"
                  ref={genderRef}
                >
                  <option value="" className="bg-green-300 text-black" disabled>
                    Select Gender
                  </option>
                  <option value="male" className="bg-green-300 text-black">
                    Male
                  </option>
                  <option value="female" className="bg-green-300 text-black">
                    Female
                  </option>
                  <option value="other" className="bg-green-300 text-black">
                    Other
                  </option>
                </select>
              </div>
              <div className="w-full mb-8">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Country"
                  className="bg-inherit border-b-2 border-solid border-white text-2xl text-white w-[25rem] placeholder-white outline-none outline-none focus:placeholder-transparent"
                  ref={countryRef}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="text-3xl text-white flex justify-center items-center mx-4 bg-buttongreen rounded-[2rem] w-[10rem] hover:bg-buttongreen focus:bg-buttongreen"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="text-3xl text-white flex justify-center items-center mx-4 bg-buttongreen rounded-[2rem] w-[10rem] hover:bg-buttongreen focus:bg-buttongreen"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-[2.5rem]">
        <img src="/assets/Asset 1.png" alt="" />
      </div>
    </div>
  );
}
