import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ==== Imported Chakra
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";

function App() {
  // =====Wrap ChakraProvider at the root of your app
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
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
