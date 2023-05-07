
import React from 'react';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';



const rootElement = document.getElementById('root');

const root = createRoot(rootElement)
root.render(
  
  <StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
