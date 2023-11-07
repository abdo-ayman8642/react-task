import React, { useState, useEffect } from "react";
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LanguageIcon from "@mui/icons-material/Language";

import { useForm, Controller } from "react-hook-form";

const MyForm = ({ open, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Check if the window width is less than a certain threshold (e.g., 768 pixels for mobile)
      const isMobile = window.innerWidth < 900;
      setIsMobile(isMobile);
    }

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Call it initially to set the initial value
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={toggle}
        aria-labelledby="user-view-edit"
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 1000,
            p: [2, 3],
          },
          "& .MuiGrid-container": {
            marginTop: "0 !important",
          },
          "& .MuiGrid-item": {
            paddingTop: "15px !important",
            paddingLeft: "25px !important",
          },
        }}
        aria-describedby="user-view-edit-description"
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            <LanguageIcon sx={{ color: "#47AE7670" }} />
            Buy Domain
          </div>
          <div
            style={{
              color: "#737373",
              fontSize: "16px",
              fontWeight: "400",
              marginBottom: "15px",
            }}
          >
            This information is required in order to reach you in case of
            problems with your registration
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 30%",
          }}
        >
          <DialogContent
            sx={{ paddingTop: "0 !important", paddingBottom: "0 !important" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={6}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    borderColor: "rgba(0, 0, 0, 0.01)",
                  },
                  "& .MuiInputBase-input": {
                    padding: "13px 8px",
                  },
                }}
              >
                <Grid item xs={6}>
                  <TextField fullWidth label="First Name" name="firstname" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Last Name" name="lastname" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="companyname"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Email" name="email" />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Address Line 1"
                    name="Address1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Address Line 2"
                    name="Address2"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField fullWidth label="City" name="city" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="State" name="state" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Zip Code" name="zipcode" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Phone Number" name="phone" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Country" name="country" />
                </Grid>
              </Grid>
              <DialogActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#55B76E",
                    borderRadius: "30px",
                    width: "150px",
                    "&:hover": { backgroundColor: "#55B76E" },
                  }}
                  type="submit"
                >
                  Buy Now
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
          <DialogContent
            sx={{
              backgroundColor: "#F9FAFC",
              marginBottom: "auto",
              padding: "0 30px ",
              borderRadius: "20px",
            }}
          >
            <div
              style={{ padding: "20px 0", borderBottom: "1px dashed #c9c9c9" }}
            >
              Domain Details
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
              }}
            >
              <p style={{ padding: "10px 0" }}>tridmark.net</p>
              <p style={{ color: "#55B76E" }}>15.40 USD</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <TaskAltIcon style={{ marginRight: "10px", color: "#55B76E" }} />{" "}
              Privacy protection is on
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <TaskAltIcon style={{ marginRight: "10px", color: "#55B76E" }} />{" "}
              Auto-renew is on
            </div>
            <div
              style={{
                color: "#4D4D4D",
                fontSize: "14px",
                paddingBottom: "10px",
              }}
            >
              This domain will be auto-renewed around August 1 every year. You
              will automatically be billed when the renewal occurs.
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default MyForm;
