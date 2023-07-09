import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMainThemeContext } from "./contexts/MainThemeContext";
import Home from "./components/home/Home";

const App = () => {
  const { theme } = useMainThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
