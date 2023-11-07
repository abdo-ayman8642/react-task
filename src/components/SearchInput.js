import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";
import profilePic from "../utils/assets/AnyConv.com__IMG_9008.jpg";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    padding: "12px 20px",
    backgroundColor: "#fff",
    borderRadius: "30px",
  },
  searchInput: {
    flex: 1,
    "& .MuiInputBase-input": {
      padding: "10px 14px",
      backgroundColor: "#f9fafc",
      borderRadius: "30px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        fullWidth
        InputProps={{
          sx: { borderRadius: 15 },
        }}
        placeholder="Search"
      />
      <div style={{ display: "flex", gap: "10px", margin: "0 10px" }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <Badge
            badgeContent={4}
            color="error"
            sx={{
              "& .MuiBadge-badge": {
                height: "15px",
                fontSize: "0.6rem",
                minWidth: "15px",
                top: "2px",
                right: "3px",
              },
            }}
          >
            <NotificationsNoneIcon color="action" />
          </Badge>
        </IconButton>
        <Avatar className={classes.avatar} alt="Profile" src={profilePic} />
      </div>
    </div>
  );
}

export default Header;
