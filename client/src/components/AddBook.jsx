import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const AddBook = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: 0,
    price: 0,
    summary: '',
    thumbnail: [],
  });



  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? Number(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleImage = (e) =>{
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
}

const setFileToBase = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setFormData({ ...formData, thumbnail: reader.result });
    }

}

console.log(formData);


  const handleSubmit = () => {



    axios
      .post('/api/v1/add-book', formData)
      .then((response) => {
        console.log('Form data sent:', response.data);
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
          type="number"
          fullWidth
          variant="standard"
          inputProps={{ max: 5, min: 0 }}
        />

<input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBook;
