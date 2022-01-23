import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Packages
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Add-ons to keep the music going!
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Maintenance
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                add $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                35
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Rental Insurance
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Maintenance services
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Includes starter accessories
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="cyan" variant="outline">
                Add to Cart
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("cyan.300", "cyan.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Maintenance PLUS
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  160
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /semester
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Rental Insurance
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Loaner instrument during maintenance
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Includes starter accessories
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Includes textbook
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />1 Semester
                  (Aug-Dec or Jan-May)
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="cyan">
                  Add to Cart
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Concert Master
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                300
              </Text>
              <Text fontSize="xl" color="gray.500">
                / school year
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Rental Insurance
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Loaner instrument during maintenance
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Includes starter accessories
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Includes textbook
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />1 School Year
                (Aug-May)
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="cyan" variant="outline">
                Add to Cart
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
