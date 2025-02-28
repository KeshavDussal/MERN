import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./slider";
import { Box, Button, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
function Home() {
  return (
    <>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "yellowgreen", fontWeight: "bold" }}
        >
          Welcome to TravelBuddy Application
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          Your personal guide to the best attractions and restaurants in the
          city.
        </Typography>
        <ImageCarousel />
      </Box>
      <Box sx={{ mt: 20 }}>
        <Link to="/attractions">
          <Button variant="contained" sx={{ mr: 3 }}>
            Attractions
          </Button>
        </Link>
        <Link to="/restaurants">
          <Button variant="contained">Restaurants</Button>
        </Link>
      </Box>
    </>
  );
}

export default Home;
