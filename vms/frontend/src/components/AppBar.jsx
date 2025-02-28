import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const TopBar = () => {
  return (
    <AppBar sx={{ zIndex: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Visitor Management System
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
