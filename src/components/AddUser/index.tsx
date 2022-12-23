import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { IUser } from "../../types/user";

interface IAddUser {
  handleClose: () => void;
  addUser: (user: IUser) => void;
  open: boolean;
}
function AddUser({ handleClose, open, addUser }: IAddUser) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>content</DialogContent>
      <DialogActions>
        <Button variant="outlined">Close</Button>
        <Button variant="contained">submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUser;
