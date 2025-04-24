import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, Business, People, Assessment } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" sx={{ width: 360, flexShrink: 0, zIndex: 1 }}>
      <List sx={{ mt: "4rem" }}>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate("/departments")}>
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
        <ListItem button onClick={() => navigate("/visitors")}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Visitors" />
        </ListItem>
        <ListItem button onClick={() => navigate("/reports")}>
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
