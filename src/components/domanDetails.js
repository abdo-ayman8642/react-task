import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

import domainLogo from "../undraw_domain_names_re_0uun.svg";

const useStyles = makeStyles({
  spans: {
    color: "gray",
  },
});

const DomainDetails = ({ toggle, open, data }) => {
  const classes = useStyles();
  const { id, price, start_date, status } = data || {};
  return (
    <Dialog fullWidth open={open} maxWidth="xs" onClose={toggle}>
      <DialogContent sx={{ padding: "30px" }}>
        <div
          style={{ textAlign: "center", padding: "20px 0", fontSize: "30px" }}
        >
          Domain Details
        </div>
        <img
          src={domainLogo}
          style={{ width: "100%" }}
          alt="logo descriping domain"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <p>
            <span className={classes.spans}>ID:</span> {id}
          </p>
          <p>
            <span className={classes.spans}>Price:</span> ${price?.toFixed(2)}
          </p>
          <p>
            <span className={classes.spans}>Status:</span>

            {status === 1
              ? " Running"
              : status === 2
              ? " Will Expire"
              : " Expired"}
          </p>
          <p>
            <span className={classes.spans}>Created At:</span> {start_date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DomainDetails;
