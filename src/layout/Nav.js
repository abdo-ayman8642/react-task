import React from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListItemIcon from "@mui/material/ListItemIcon";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GroupIcon from "@mui/icons-material/Group";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "../components/SearchInput";
import TableSelection from "../components/table";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100px",
    background:
      "linear-gradient(110deg, rgba(255, 0, 0, 0.8), rgba(0, 0, 255, 0.8))",
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start", // Center vertically
    alignItems: "center", // Center horizontally
    paddingTop: theme.spacing(2),
    overflowY: "auto",
    overflowX: "hidden",
  },
  mainContent: {
    marginLeft: "100px",
    width: "100%",

    padding: theme.spacing(2),
  },
}));

function VerticalNav() {
  const classes = useStyles();

  const icons = [
    <HomeIcon />,
    <ViewInArIcon />,
    <GroupIcon />,
    <HelpOutlineIcon />,
    <LocalMallIcon />,
    <ShowChartIcon />,
    <CampaignIcon />,
    <SettingsIcon />,
    <LogoutIcon />,
  ];

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <List
          component="nav"
          sx={{
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "100%",
          }}
        >
          {icons.map((icon, index) => (
            <ListItem
              key={index}
              sx={{
                ...(index === icons.length - 1
                  ? { marginTop: "100%", marginBottom: "30px" }
                  : {}),
              }}
            >
              <ListItemIcon
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#c3c3c3",
                  cursor: "pointer",
                  "& .MuiSvgIcon-root": { fontSize: "1.8rem" },

                  "&:hover": {
                    color: "#fff", // Change the color on hover to 'blue' (you can use any color you prefer)
                  },
                }}
              >
                {icon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </nav>
      <main className={classes.mainContent}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Header />
        </div>

        <div>
          <header>
            <h3 style={{ color: "#8D8D8D", marginBottom: "5px" }}>
              Dashboard/ domains
            </h3>
            <h1 style={{ marginTop: 0 }}>Domains</h1>
          </header>

          <TableSelection />
        </div>
      </main>
    </div>
  );
}

export default VerticalNav;
