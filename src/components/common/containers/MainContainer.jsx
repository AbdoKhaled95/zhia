import { Container } from "@mui/material";
import React from "react";

const MainContainer = ({ children }) => {
  return (
    <Container
      sx={{
        height: "100%",

        p: { xs: "30px", md: "60px", lg: "90px" },
      }}
      maxWidth="container"
    >
      {children}
    </Container>
  );
};

export default MainContainer;
