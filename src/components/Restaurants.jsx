import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import restaurantData from "../../public/restaurants.json";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { red } from "@mui/material/colors";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(restaurantData);
  }, []);

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, textAlign: "left", width: 500 }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{ color: "yellowgreen", borderBottom: "1px solid lightgray" }}
        >
          Restaurants List
        </Typography>
        <List style={{ listStyleType: "none" }}>
          {restaurants.map((restaurant) => (
            <ListItem sx={{ cursor: "pointer" }}>
              <Link to={`/restaurants/${restaurant.id}`}>
                <ListItemText>
                  <RestaurantIcon sx={{ mr: 2, color: "red" }} />
                  {restaurant.name}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Restaurants;
