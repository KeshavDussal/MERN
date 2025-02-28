import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import attractionsData from "../../public/attractions.json";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
function Attractions() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    setAttractions(attractionsData);
  }, []);

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, textAlign: "left", width: 400 }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{ color: "yellowgreen", borderBottom: "1px solid lightgray" }}
        >
          Attractions List
        </Typography>
        <List style={{ listStyleType: "none" }}>
          {attractions.map((attraction) => (
            <ListItem sx={{ cursor: "pointer" }}>
              <Link to={`/attractions/${attraction.id}`}>
                <ListItemText>
                  {" "}
                  <FlightIcon sx={{ mr: 2, color: "black" }} />
                  {attraction.name}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Attractions;
