import React from "react";
// ==== Imported Chakra
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

  return (
    <VStack p={5}>
      {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" /> */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Welcome to
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400, blue.500 ,purple.600)"
            bgClip="text"
          >
            Play It Again Tunes
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Musical Instrument Rentals
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open(
                "https://tenor.com/view/star-wars-obi-wan-kenobi-hello-there-hi-there-greeting-gif-17424068"
              )
            }
          >
            Click Me
          </Button>
        </Box>

        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://www.lifesavvy.com/p/uploads/ls20-gen/2021/04/reviewgeek-c13a2106.jpg?width=1200"
        />
      </Flex>
    </VStack>
  );
}

export default Header;

//TODO FRONT-END
// Work on styling for backgroung
// Created Boxs for popular catergories
// Insert images as icons for boxes
// Insert Logo for site once ready
