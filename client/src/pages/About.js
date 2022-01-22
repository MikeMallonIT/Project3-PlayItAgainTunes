import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react'


export const About = () => {
  return(
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          About Us
        </Heading>
        <Text mt="4" fontSize="lg">
          Play It Again Tunes was founded by The Wholesome 4 in 2022. Play It Again Tunes has created an online destigation where music students and educators can rent out instruments for semester or full year. This allows an affordable way to expand their musical education. 
        </Text>
      </Box>
    </Box>
  )
} 

export default About;