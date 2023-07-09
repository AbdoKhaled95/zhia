import { Box } from "@mui/system";
import React from "react";
import { motion } from "framer-motion";
import images from "../../assets/images/images";
import { Stack, Typography } from "@mui/material";
import MainContainer from "../common/containers/MainContainer";
const Home = () => {
  const transition = {
    duration: 1,
    ease: "easeInOut",
    type: "spring",
    mass: 6,
    stiffness: 55,
    damping: 32,
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.img}
        src={images.img0}
        sx={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "600px",
          height: "100vh",
          objectFit: "fill",
        }}
        animate={{ scale: [1.5, 1] }}
        transition={transition}
      />
      <MainContainer>
        <Stack
          component={motion.div}
          justifyContent={"space-between"}
          height="100%"
          animate={{ x: [-500, 0] }}
          transition={transition}
        >
          <Box
            component={"img"}
            src={images.logo0}
            sx={{
              width: { xs: "48px", md: "60px", lg: "72px" },
              height: { xs: "70px", md: "90px", lg: "110px" },
            }}
          ></Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: 32, md: 48, lg: 60 },
              lineHeight: { xs: "30px", md: "45px", lg: "60px" },
            }}
          >
            design <br />
            under build
          </Typography>
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default Home;
