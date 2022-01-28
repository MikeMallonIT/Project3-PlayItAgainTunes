import React from 'react';
import { Box, Heading, Text ,Link} from '@chakra-ui/react'


export const About = () => {
  return (
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
           Play It Again Tunes is a demonstration of what the Wholesome 4 is capable of after learning Full Stack Web Development from the SMU Coding Bootcamp. Alice, Charlie, Miranda and Mike worked together to build a website where students and educators can rent musical instruments and equipment.
        <br></br><br></br>
        The Wholesome 4 were inspired to build Play It Again Tunes by their collective love for music and Charlie’s hands-on experience as a high school educator.
        <br></br><br></br>
        Miranda and Mike both work in the insurance industry but are eager to work more closely with software development and find a career path that includes writing code. Alice is a receptions and an aspiring full stack software developer. She hopes to seek employment as a junior developer after Coding Bootcamp.
          <br></br><br></br>
          The Wholesome 4 currently reside in the Dallas-Fort Worth Metroplex but grew up in different cities, states and even countries. For business inquiries, <Link href='/contact' rel='noopener noreferrer'>Click Here!</Link>
        </Text>
      </Box>
    </Box>
  )
}

export default About;