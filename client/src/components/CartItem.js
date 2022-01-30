import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";

const QuantitySelect = (props) => {
  return (
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
    </Select>
  );
};

export const CartItem = (props) => {
  const { _id, name, description, quantity, image, price } = props;

  useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    console.log("deleted", item);
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const handleQChange = () => {
    console.log("changed quantity");
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
        <PriceTag price={price} />
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
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};

//Front-End
//CartItem is associated to items in the Cart Page.
