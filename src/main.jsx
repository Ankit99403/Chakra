import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";
import ColorModeSwitcher from "./Colormodeswitcher.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
