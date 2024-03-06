import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "../../../public/images/sbgAssets/homeIcon";
import ProjectsIcon from "../../../public/images/sbgAssets/projectIcon";
import CalenderEvent from "../../../public/images/sbgAssets/calenderEvent";
const data = [
  {
    icon: <HomeIcon />,
    name: "Home",
  },
  {
    icon: <ProjectsIcon />,
    name: "Events",
  },
  {
    icon: <CalenderEvent />,
    name: "Projects",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: "50px",
      }}
    >
      <Grid container sx={{ alignItems: "center", height: "100%" }}>
        <Grid item xs={6} sm={4}>
          <Box ml={2}>
            <Typography color={"primary.light"}>&copy; 2024</Typography>
          </Box>
        </Grid>
        {/* //second grid  */}
        <Grid item xs={6} sm={4}>
          <Typography color={"primary.light"} sx={{ textAlign: "center" }}>
            ETS Laboratory
          </Typography>
        </Grid>
        {/* Third grid  */}
        <Grid item xs={6} sm={4}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {data?.map((item, index) => {
              return (
                <Box
                  key={item?.name + index}
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box mr={1}>{item?.icon}</Box>
                  <Box>
                    <Typography color={"primary.light"}>
                      {item?.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
