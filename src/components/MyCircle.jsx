import { Box, Button, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const MyCircle = ({ text, color }) => {
  const [hoverStyle, setHoverStyle] = useState({});

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const buttonRect = event.target.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const radius = Math.sqrt(dx * dx + dy * dy);
    const hoverStyles = {
      transform: `translate(${dx}px, ${dy}px)`,
      boxShadow: `0 0 ${radius}px rgba(0, 0, 0, 0.3)`,
    };
    setHoverStyle(hoverStyles);
  };

  const handleMouseLeave = () => {
    setHoverStyle({});
  };
  return (
    <>
      <Box
        bg={color}
        borderRadius="50%"
        color="white"
        h="150px"
        w="150px"
        mt={20}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        transition="transform 0.3s, box-shadow 0.3s"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={hoverStyle}
      >
        <Center>
          <Text
            fontSize={"1rem"}
            fontWeight={"100"}
            fontFamily={"helvetica"}
            letterSpacing={2}
          >
            {text}
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default MyCircle;
