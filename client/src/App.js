import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from "@chakra-ui/react";
// ==== Imported Chakra 
import { ChakraProvider, useColorMode} from "@chakra-ui/react";
import './index.css';
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
    < >
    <NavBar></NavBar>
     <Header></Header>
  
        {/* <NavBar></NavBar>
      <CategoryMenu></CategoryMenu> */}
      {/* <ProductItem></ProductItem>
      <ProductList></ProductList>
      <CartItem></CartItem>
      <Cart></Cart> */}
      
    </>
  )
}


export default App;

// TODO FRONT-END
// To Start App ` npm run develop`
// Added imports pages and tags in function app, but we working through them one by one to avoid big errors
// Need to look into adding routes:
{/* <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
      </Router> */}
