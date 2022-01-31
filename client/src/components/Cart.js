import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";

export const Cart = () => {
  const state = useSelector((state) => state);

  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>
          {state.cart.length ? (
            <Stack spacing="6">
              {state.cart.map((product) => (
                <CartItem
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  des={product.description}
                />
              ))}
            </Stack>
          ) : (
            <Stack spacing="6">
              {" "}
              <Link href={"./categories"} color={mode("blue.500", "blue.200")}>
                Nothing here? Check out our instrument selection!
              </Link>{" "}
            </Stack>
          )}
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link href={"./categories"} color={mode("blue.500", "blue.200")}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Cart;

//Front-End
// Cart.js is the layout of the Cart page.
// This includes "Continue shopping"
