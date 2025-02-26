"use client";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ width: "100%", zIndex: 1000 }}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
