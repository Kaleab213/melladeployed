const styles = {
  boxWidth: "xl:max-w-[1320px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] lgg:text-[60px] text-[30px] text-white xs:leading-[76.8px] leading-[35px] w-full",
  heading2__white:
    "font-poppins font-semibold xs:text-[48px] lgg:text-[60px] text-[30px] text-black xs:leading-[76.8px] leading-[35px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[20px] lgg:text-[25px] leading-[30.8px]",
  heading3:
    "font-poppins font-semibold xs:text-[40px] lgg:text-[50px] text-[30px] text-white xs:leading-[76.8px] leading-[40px] w-full",
  heading3__white:
    "font-poppins font-semibold xs:text-[40px] lgg:text-[50px] text-[25px] text-primary xs:leading-[76.8px] leading-[40px] w-full",

  paragraph__white:
    "font-poppins font-normal text-primary text-[20px] lgg:text-[25px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-4",
  // paddingX: "sm:px-0 px-0",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
