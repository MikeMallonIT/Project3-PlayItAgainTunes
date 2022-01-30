import {
  Button,
  Flex,
  Heading,
  Stack,
  Link,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import Auth from "../utils/auth";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
// import { cartData } from "../pages/_data";
// import Checkout from './Checkout'

const stripePromise = loadStripe(
  "pk_test_51KM3QnC6YTxwccfILC64JeSnBh9KaygMfQp2aioKxwKr1GI6szA0t6i02xNKdJlwTp2OOpg3etDTBhk5fEdo5nDx00oW0Xwqqx"
);

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
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const state = useSelector((state) => state);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  }
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds },
    });
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
      {Auth.loggedIn ? (
        <Button
          colorScheme="cyan"
          size="lg"
          fontSize="md"
          onClick={submitCheckout}
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      ) : (
        <Link fontSize="lg" fontWeight="semibold">
          Login to get your rental started!
        </Link>
      )}
    </Stack>
  );
};

//Front-End
// Cart Order Summary is associated to Cart page, specific to  "Order Summary" and checkout button
