import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantData from "../../public/restaurants.json";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(restaurantData);
  }, []);

  useEffect(() => {
    // Filter inside useEffect
    if (restaurant.length == 0) return;
    const filtered = restaurant.find((r) => r.id === Number(id));
    setFilteredRestaurant(filtered || null); // Since filter returns an array, get the first item
  }, [restaurant, id]); // Include id in dependencies to ensure it updates when id changes
  if (!filteredRestaurant)
    return <Typography variant="h4">Restaurant Detail not found</Typography>;
  return (
    <>
      {filteredRestaurant ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 3 }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="300"
              image={filteredRestaurant.image}
              alt={filteredRestaurant.name}
            ></CardMedia>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {filteredRestaurant.name}
              </Typography>
              <Typography variant="body1">
                {filteredRestaurant.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <>
          <Typography variant="h1">Loading....</Typography>
        </>
      )}
    </>
  );
}

export default RestaurantDetail;
