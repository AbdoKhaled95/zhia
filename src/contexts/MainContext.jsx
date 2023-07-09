import React, { createContext, useContext } from "react";
// import axios from "axios";

const MainContext = createContext({});

const MainProvider = ({ children }) => {
  // axios.defaults.baseURL =
  //   "https://mycash-dashbackend.fatoorah.online/apiAdmin/website/";
  // axios.defaults.headers.common["Accept"] = "application/json";
  // axios.defaults.headers.common["lang"] = "en";
  ///////////////////////////////////////////////////

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};
// make sure use
export default MainProvider;
export const useMainContext = () => {
  return useContext(MainContext);
};
