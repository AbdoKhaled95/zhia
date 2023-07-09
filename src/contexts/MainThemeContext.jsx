import { createTheme } from "@mui/material";
import React, { createContext, useContext, useRef, useState } from "react";
// import mainTheme from "../assets/themes/mainTheme";

const MainThemeContext = createContext({
  mode: "light",
  setMode: () => {},
  theme: {},
  setColorMode: () => {},
  // navHeight: 80,
});
const MainThemeProvider = ({ children }) => {
  // const navHeight = "80px";

  const [mode, setMode] = useState("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            container: 1920,
          },
        },
        direction: "ltr",
        palette: {
          mode: mode,
          // primary: {
          // main: "#4274b7",
          // },
          // secondary: {},
          // custom: {
          // background0: "#f8f8f9",
          // },
          // text: { primary: "#303030", secondary: "#888" },
        },

        typography: {
          // h1: { fontSize: 34 },
          // h2: {},
          // h3: { fontWeight: 500, fontSize: 16 },
          // h4: {
          //   fontWeight: "500",
          // },
          // h5: {},
          // body1: { fontWeight: 400, fontSize: 10 },
          // body2: {},
          // caption: {},
          // button: {},
          // fontFamily: "Domine, sans-serif",
          fontFamily: "Abril Fatface, cursive",
        },
        components: {
          // MuiButton: {
          //   styleOverrides: {
          //     root: {
          //       padding: 0,
          //       fontSize: 14,
          //     },
          //   },
          // },
        },
      }),
    [mode]
  );

  // const setColorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   [theme]
  // );

  return (
    <MainThemeContext.Provider
      value={{
        mode,
        // setColorMode,
        theme,
        // navHeight,
      }}
    >
      {children}
    </MainThemeContext.Provider>
  );
};

export default MainThemeProvider;
export const useMainThemeContext = () => {
  return useContext(MainThemeContext);
};
