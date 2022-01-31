// import {
//     Flex,
//     Circle,
//     Box,
//     Image,
//     Badge,
//     useColorModeValue,
//     Icon,
//     chakra,
//     Tooltip,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     Text,
//     useDisclosure,
//   } from "@chakra-ui/react";
//  import { useDispatch, useSelector } from "react-redux";
//   //import { BsTools } from "react-icons/bs";
//   //import { FiShoppingCart } from "react-icons/fi";
//   import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
//   import { idbPromise } from "../utils/helpers";
  

//   function addService(item) {

//     const dispatch = useDispatch();
//     const state = useSelector((state) => state);
  
//     const { _id, name, price, image, des, quantity } = item;
  
//     const { cart } = state;


//       const itemInCart = cart.find((cartItem) => cartItem._id === _id);
//       if (itemInCart) {
//         dispatch({
//           type: UPDATE_CART_QUANTITY,
//           _id: _id,
//           purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//         });
//         idbPromise("cart", "put", {
//           ...itemInCart,
//           purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//         });
//       } else {
//         dispatch({
//           type: ADD_TO_CART,
//           product: { ...item, purchaseQuantity: 1 },
//         });
//         idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
//       }
// };

// export default addService;
