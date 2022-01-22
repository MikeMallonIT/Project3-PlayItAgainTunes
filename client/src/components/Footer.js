import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"./about"}>About Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Team</ListHeader>
            <Link
              href="https://github.com/thutuephan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alice Phan
            </Link>
            <Link
              href="https://github.com/cah4758"
              target="_blank"
              rel="noopener noreferrer"
            >
              Charles Hernandez
            </Link>
            <Link
              href="https://github.com/MikeMallonIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike Mallons
            </Link>
            <Link
              href="https://github.com/Zermeno94"
              target="_blank"
              rel="noopener noreferrer"
            >
              Miranda Zermeno
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>License</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 The Wholesome 4. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Button label={"Twitter"} href={"#"}>
              <FaTwitter />
            </Button>
            <Button
              as={"a"}
              label={"Github"}
              href="https://github.com/MikeMallonIT/Project3-PlayItAgainTunes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Button>
            <Button
              as={"a"}
              label={"Instagram"}
              href={"https://www.instagram.com/fluffpup41/"}
              target="_blank"
              res="noopener noreferrer"
            >
              <FaInstagram />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
