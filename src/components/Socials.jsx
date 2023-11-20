import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <Flex>
        <Box
          gap
          as={FaFacebook}
          size="20px"
          color="white"
          mx={2}
          cursor="pointer"
        />
        <Text>Facebook</Text>
      </Flex>
      <Flex>
        <Box as={FaTwitter} size="20px" color="white" mx={2} cursor="pointer" />
        <Text>Twitter</Text>
      </Flex>
      <Flex>
        <Box
          as={FaInstagram}
          size="20px"
          color="white"
          mx={2}
          cursor="pointer"
        />
        <Text>Instagram</Text>
      </Flex>
    </>
  );
};

export default Socials;
