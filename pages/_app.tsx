import { AuthProvider } from "../lib/auth";
import { ChakraProvider, CSSReset, GlobalStyle } from "@chakra-ui/react";

import theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
