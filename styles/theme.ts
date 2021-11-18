import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
// html {
//             scroll-behavior: smooth;
//           }
//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//           }
export default extendTheme({
  colors,
  fonts: {
    heading: "Inter",
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      "#__next": {
        displat: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
});
