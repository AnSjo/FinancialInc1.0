// Layout.jsx
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Chatbot", path: "/Chatbot" },
   { label: "Education", path: "/Education" }
];

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Financial App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "#1976d2",  
             // Full drawer background
      color: "#fff" }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
                sx={{ 
        "&:hover": {
          bgcolor: "#115293", // darker blue on hover
        } }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Page Content */}
      <Box component="main" flexGrow={1} p={2}>
        <Outlet /> {/* Where nested routes render */}
      </Box>
    </Box>
  );
}
