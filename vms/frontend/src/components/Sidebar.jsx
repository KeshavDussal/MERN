import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Dashboard, Business, People, Assessment } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" sx={{ width: 360, flexShrink: 0, zIndex: 1 }}>
      <List sx={{ mt: "4rem" }}>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/departments")}>
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/visitors")}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Visitors" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/reports")}>
          <ListItemIcon>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
