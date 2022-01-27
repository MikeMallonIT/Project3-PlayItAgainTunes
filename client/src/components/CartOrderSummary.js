import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { cartData } from "../pages/_data";
// import Checkout from './Checkout'

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

// using cartData from _data
export const CartOrderSummary = () => {
  function calculateTotal() {
    let sum = 0;
    cartData.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  }
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem
          label="Subtotal"
          value={formatPrice(calculateTotal())}
        />
        <OrderSummaryItem label="Shipping + Tax">
          <Text textDecor="none">Calculate on next page</Text>
        </OrderSummaryItem>
        {/* <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem> */}
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(calculateTotal())}
          </Text>
        </Flex>
      </Stack>

      <Button
        colorScheme="cyan"
        size="lg"
        fontSize="md"
        onClick={() => window.open("./checkout")}
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
