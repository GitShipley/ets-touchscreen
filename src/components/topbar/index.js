import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import TopBarTempreture from "../../../public/images/sbgAssets/topBarTempreture";
import axios from "axios";

const API_KEY = "b7419797aa0a0eac91925aa8a5123545"; // Replace with your OpenWeatherMap API key

const TopBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = async () => {
    try {
      const position = await navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }
      );
    } catch (err) {
      setError(`Error getting location: ${err.message}`);
      console.error(err);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
      );
      setTemperature(response.data.main.temp);
    } catch (err) {
      setError(`Error fetching weather: ${err.message}`);
      console.error(err);
    }
  };

  useEffect(() => {
    getLocation();
    fetchWeather();
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: "auto",
      }}
    >
      <Grid container>
        <Grid item xs={10} sm={11}>
          <Box
            ml={isMobile ? "0px" : 4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              color={"primary.light"}
              variant={isMobile ? "h6" : "h4"}
              p={isMobile ? 0 : 1}
            >
              {formattedDate}
            </Typography>
            <Typography
              color={"primary.light"}
              variant="subtitle1"
              sx={{
                fontSize: isMobile ? "12px" : "15px",
              }}
              ml={isMobile ? "0px" : 4}
            >
              {"Current time : "}
              {time}
            </Typography>
          </Box>
        </Grid>
        {/* second Grid */}
        <Grid
          item
          xs={2}
          sm={1}
          color={"primary.light"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box mr={isMobile ? 0 : 4}>
            <TopBarTempreture temperature={temperature} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopBar;
