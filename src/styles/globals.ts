import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#1b2431",
    foreground: "#edf4ff",
    highlight: {
      primary: "#84b1fa",
      secondary: "#297aff",
    },
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
