import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Styled Components
const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.8rem",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const GradientAppBar = styled(AppBar)({
  background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
});

const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px",
  padding: "6px 16px",
  textTransform: "none",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/login");
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuItems = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 2,
        alignItems: "center",
      }}
    >
      {!token ? (
        <>
          <RoundedButton
            color="inherit"
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
          >
            Home
          </RoundedButton>
          <RoundedButton
            color="inherit"
            component={Link}
            to="/login"
            onClick={handleDrawerToggle}
          >
            Login
          </RoundedButton>
          <RoundedButton
            color="secondary"
            component={Link}
            to="/register"
            onClick={handleDrawerToggle}
            variant="contained"
          >
            Register
          </RoundedButton>
        </>
      ) : (
        <>
          <RoundedButton
            color="inherit"
            component={Link}
            to="/dashboard"
            onClick={handleDrawerToggle}
          >
            Dashboard
          </RoundedButton>
          <RoundedButton
            color="inherit"
            component={Link}
            to="/profile"
            onClick={handleDrawerToggle}
          >
            Profile
          </RoundedButton>
          <RoundedButton
            color="secondary"
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </RoundedButton>
        </>
      )}
    </Box>
  );

  return (
    <GradientAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo variant="h6" onClick={() => navigate("/")}>
            CBT App
          </Logo>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "250px",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                  }}
                >
                  <MenuItems />
                </Box>
              </Drawer>
            </>
          ) : (
            <MenuItems />
          )}
        </Toolbar>
      </Container>
    </GradientAppBar>
  );
};

export default Header;
