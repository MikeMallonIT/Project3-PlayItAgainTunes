import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ==== Imported Chakra
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.js";

import "./assets/scss/global.scss";

import NavBar from "./components/Navbar";
// import Header from "./components/Header";
import Footer from "./components/Footer";

import CategoryMenu from "./components/CategoryMenu";
import ProductList from "./components/ProductList";
import PriceTag from "./components/PriceTag";
// import { OrderSummary } from "./components/OrderSummary";
// import { CartOrderSummary } from "./components/CartOrderSummary";
// import { PaymentInformation } from "./components/PaymentInformation";
// import { ShippingInformation } from "./components/ShippingInformation";
// import { ShippingMethod } from "./components/ShippingMethod";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Cart from "./components/Cart";
import { Suspense } from "react";
import OrderHistory from "./pages/OrderHistory";
import Success from "./pages/Success";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // =====Wrap ChakraProvider at the root of your app
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Suspense>
            <NavBar></NavBar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/categories" element={<Categories />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/categorymenu" element={<CategoryMenu />} />
              <Route exact path="/orderhistory" element={<OrderHistory />} />
              <Route exact path="/success" element={<Success />} />
              {/* <Route exact path="/productlist" element={<ProductList />} />; ; */}
            </Routes>
            <Footer />
          </Suspense>
        </Router>
        {/* <NavBar></NavBar>
      <CategoryMenu></CategoryMenu> */}
        {/* <ProductItem></ProductItem>
      <ProductList></ProductList>
      <CartItem></CartItem>
      <Cart></Cart> */}
      </ApolloProvider>
    </Provider>
  );
}

export default App;

// TODO FRONT-END
// To Start App ` npm run develop`
// Added imports pages and tags in function app, but we working through them one by one to avoid big errors
