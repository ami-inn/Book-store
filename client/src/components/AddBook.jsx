import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const AddBook = ({ open, handleClose,setRefresh }) => {
  console.log(setRefresh);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: Number,
    price: Number,
    summary:'',
    thumbnail: null, // To store the selected image file
  });

  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = () => {
    // Send the form data to the backend using Axios
    
    axios
      .post('/api/v1/add-book', formData)
      .then((response) => {
        console.log('Form data sent:', response.data);
        alert('success')
        // setRefresh==true?setRefresh(false):setRefresh(true);
        handleClose();
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        alert('Error adding the book.');
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Book</DialogTitle>
      <DialogContent>
        <DialogContentText>Fill in the details:</DialogContentText>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          fullWidth
          variant="standard"
        />
        <TextField
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          fullWidth
          variant="standard"
        />
        <TextField
          label="Summary"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          fullWidth
          variant="standard"
        />
        <TextField
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          fullWidth
          variant="standard"
        />
        <TextField
          label="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          type='number'
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBook;
