import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import attractionData from "../../public/attractions.json";

function AttractionDetail() {
  const { id } = useParams();
  const [attraction, setAttraction] = useState([]);
  const [filteredAttraction, setFilteredAttraction] = useState(null);

  useEffect(() => {
    setAttraction(attractionData);
  }, []);

  useEffect(() => {
    if (!attraction.length) return; // Ensure attractionData is loaded before filtering
    const filtered = attraction.find((a) => a.id === Number(id));
    setFilteredAttraction(filtered || null); // Ensure null if no match
  }, [attraction, id]);

  if (!filteredAttraction)
    return <Typography variant="h4">Attraction Not Found</Typography>;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 3 }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={filteredAttraction.image}
          alt={filteredAttraction.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {filteredAttraction.name}
          </Typography>
          <Typography variant="body1">
            {filteredAttraction.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AttractionDetail;
