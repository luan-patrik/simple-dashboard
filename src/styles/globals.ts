import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#1b2431",
    foreground: "#edf4ff",
    primary: {
      "200": "#80b0ff",
      "300": "#506587",
      "400": "#394861",
      "500": "#273142",
    },
  },
  styles: {
    global: {
      "html, body": {
        background: "background",
        color: "foreground",
      },
    },
  },
});
