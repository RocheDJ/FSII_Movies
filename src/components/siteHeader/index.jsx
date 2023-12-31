import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LogoutIcon from "@mui/icons-material/Logout";


// header style
const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

// ----- Header Code -----------------------
const SiteHeader = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [myColor, setMyColor] = useState("primary");
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut= () => {
    handleMenuSelect("/logout");
  };


  function MenuItems() {
    let menuOptions = [
      { label: "Home", path: "/" },
      { label: "Favorites", path: "/favorites" },
      { label: "WatchList", path: "/watchlist" },
      { label: "Upcoming", path: "/movies/upcoming" },
    ];
    setMyColor("primary");
    if (props.AppIsTV == "tv") {
      menuOptions = [
        { label: "Home", path: "/" },
        { label: "Favorites", path: "/favorites" },
        { label: "WatchList", path: "/watchlist" },
        { label: "Trending", path: "/tv/trending" },
      ];
      setMyColor("secondary");
    }

    return (
      <>
        {menuOptions.map((opt) => (
          <Button
            key={opt.label}
            color="inherit"
            onClick={() => handleMenuSelect(opt.path)}
          >
            {opt.label}
          </Button>
        ))}
      </>
    );
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} color={myColor}>
        <Toolbar>
          <IconButton aria-label="logout" color="inherit">
            <LogoutIcon  onClick={handleLogOut} />
          </IconButton>
          <Typography variant="h4" sx={styles.title}>
            Dave'sTMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies and TV!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItems />
              </Menu>
            </>
          ) : (
            <MenuItems />
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
