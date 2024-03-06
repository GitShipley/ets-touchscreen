import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import main_layout from "../../../public/main_layout.png";
import Image from "next/image";

const MainContent = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          textAlign: "center",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h2"}>Welcome</Typography>
        <Typography variant={isMobile ? "h5" : "h2"}>to</Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Image
            src={main_layout}
            height={isMobile ? 200 : 350}
            width={isMobile ? 200 : 350}
          ></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
