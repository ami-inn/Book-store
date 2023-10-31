import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Alert({ open, handleClose, id }) {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(`/api/v1/delete-book/${id}`);
      console.log(data, "delete dataaa");
    //   alert('Success');
      handleClose(); // Close the dialog after successful delete
    } catch (error) {
      alert('Error');
    //   console.log(error);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Confirm Deletion"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Alert;
