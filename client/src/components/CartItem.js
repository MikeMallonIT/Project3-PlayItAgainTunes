import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useColorModeValue as mode,
<<<<<<< HEAD
=======
  Text,
>>>>>>> main
  FormLabel,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { CartProductMeta } from "./CartProductMeta";

const QuantitySelect = (props) => {
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <FormLabel
        fontSize={{ base: "sm", md: "md" }}
        htmlFor={props.id}
        mb="0"
        align={"center"}
        padding-top={"50px"}
        color={mode("gray.600", "gray.400")}
      >
        Month(s)
      </FormLabel>

      <Select
        maxW="64px"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        {...props}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </Select>
    </Flex>
  );
};

export const CartItem = (props) => {
  const { _id, name, description, quantity, image, price } = props;

  useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const handleQChange = (event) => {
    const value = event.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: _id,
      });
      idbPromise("cart", "delete", { props });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", {
        ...props,
        purchaseQuantity: parseInt(value),
      });
    }
  };
  return (
    <Flex
      key={_id}
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} description={description} image={image} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect value={quantity} onChange={handleQChange} />

        <Text key={_id}>Rate: ${price}.00</Text>

        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => removeFromCart(props)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          onClick={() => removeFromCart(props)}
        >
          Delete
        </Link>
        <QuantitySelect value={quantity} onChange={handleQChange} />
      </Flex>
    </Flex>
  );
};

//Front-End
//CartItem is associated to items in the Cart Page.
