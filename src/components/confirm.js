import React from "react";

// Mui imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import AlertCircleOutline from "mdi-material-ui/AlertCircleOutline";
import { Loading } from "mdi-material-ui";

function ConfirmDelete({
  open,
  toggle,
  loading,
  confirmationType,
  selected,
  deleteAction,
  fetchData,
}) {
  /** states and variables */

  const handleSubmit = () => {
    deleteAction();
    toggle();
  };

  return (
    <Dialog
      open={open}
      onClose={toggle}
      aria-labelledby="user-view-edit"
      sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 650, p: [1, 3] } }}
      aria-describedby="user-view-edit-description"
    >
      <DialogContent sx={{ display: "flex" }}>
        <AlertCircleOutline color="primary" sx={{ mr: 2 }} />

        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: "1.2rem !important", color: "info" }}
        >
          {`Are You Sure Of Deleting`}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          sx={{ mr: 1 }}
          onClick={() => handleSubmit()}
        >
          {loading ? <Loading /> : "Yes"}
        </Button>
        <Button variant="outlined" color="error" onClick={toggle}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDelete;
