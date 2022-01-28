import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ==== Imported Chakra
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "./index.css";

import './assets/scss/global.scss'

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { OrderSummary } from "./components/OrderSummary";
import { CartOrderSummary } from "./components/CartOrderSummary";
import { PaymentInformation } from "./components/PaymentInformation";
import { ShippingInformation } from "./components/ShippingInformation";
import { ShippingMethod } from "./components/ShippingMethod";



//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Cart from "./components/Cart";

function App() {
  // =====Wrap ChakraProvider at the root of your app
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          {/* <Route exact path="/" element={<Header />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
      {/* <NavBar></NavBar>
      <CategoryMenu></CategoryMenu> */}
      {/* <ProductItem></ProductItem>
      <ProductList></ProductList>
      <CartItem></CartItem>
      <Cart></Cart> */}
    </>
  );
}

export default App;

// TODO FRONT-END
// To Start App ` npm run develop`
// Added imports pages and tags in function app, but we working through them one by one to avoid big errors
