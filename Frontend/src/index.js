import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});
console.log(store)
root.render(

    <BrowserRouter>
   <Provider store={store}>

    <ChakraProvider theme={theme} resetCSS={false} >
        <App />
    </ChakraProvider>
    </Provider>
    </BrowserRouter>
 



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
