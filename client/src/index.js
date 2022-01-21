import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
// import { BrowserRouter } from 'react-router-dom';




const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider> 
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);

//TODO FRONT-END
// look into extending theme and create theme.js

