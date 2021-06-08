import { ChakraProvider } from "@chakra-ui/react"

import "@fontsource/poppins/700.css";
import "@fontsource/montserrat/900.css";

import Home from "./containers/Home/Home";

import { extendTheme } from "@chakra-ui/react"

import defaultTheme from './styles/themes/default/index'

const theme = extendTheme(defaultTheme)

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Home {...pageProps}/>
    </ChakraProvider>
  );
}

export default App;
