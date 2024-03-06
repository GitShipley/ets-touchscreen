import React, { useState, useEffect } from "react";
import SideBarIcon from "../../../public/images/sbgAssets/sidebarIcon";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";

const API_KEY = "xGWRAZdESwIgqV72MoO6LHrgwXunYSlx5gjRA";
const SHEET_ID = "9W5Gjm4M6Qgjpv8rcWMq9mfRQG5xjgx29c78RvF1";

const SideBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [sheetData, setSheetData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.smartsheet.com/2.0/sheets/${SHEET_ID}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      setSheetData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("====================================");
  console.log("sheetData", sheetData);
  console.log("====================================");
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "86vh",
        borderTop: "2px solid #dbdade",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "90%",
          margin: "auto",
          borderBottom: "2px solid #dbdade",
          paddingBottom: "10px",
        }}
      >
        <Typography color={"primary.light"} variant="h4" p={1}>
          Today&apos;s Agenda
        </Typography>
        <br></br>
        <Typography color={"secondary.light"} variant="h5" p={1}>
          1300{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SideBarIcon />
          <Typography color={"primary.light"} variant="h4" p={1}>
            Ericsson
          </Typography>
        </Box>

        <Typography color={"primary.light"} variant="subtitle2" p={1}>
          Kevin Jackson | Stephen Miller | Katie Parker Ryan Cosgrove
        </Typography>
      </Box>

      <Box
        sx={{
          width: "90%",
          margin: "auto",
          borderBottom: "2px solid #dbdade",
          paddingBottom: "10px",
        }}
      >
        <Typography color={"secondary.light"} variant="h5" p={1}>
          1430{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SideBarIcon />
          <Typography color={"primary.light"} variant="h4" p={1}>
            Disney
          </Typography>
        </Box>

        <Typography color={"primary.light"} variant="subtitle2" p={1}>
          Kevin Jackson | Stephen Miller
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
