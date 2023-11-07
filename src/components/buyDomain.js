import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import MyForm from "./form";
const BuyDomain = ({ toggle, open, data }) => {
  return <MyForm open={open} toggle={toggle} />;
};
export default BuyDomain;
