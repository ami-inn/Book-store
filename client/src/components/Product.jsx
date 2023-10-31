import * as React from 'react';
import book2 from '../assets/assets/images/products/book-2.jpg';
import book1 from '../assets/assets/images/products/book-1.jpg';
import { IoMdClose, IoMdCreate, IoMdEye, IoMdStar } from 'react-icons/io';
import AddBook from './AddBook';
import axios from 'axios';
import EditBook from './EditBook';
import Alert from './Alert';
import SingleBook from './SingleBook';

const Product = () => {
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [showSingleBook, setShowSingleBook] = React.useState(false); // Renamed from SingleBook to showSingleBook
  const [SingleBookId, setSingleBookId] = React.useState('');
  const [books, setBooks] = React.useState(null);
  const [id, setId] = React.useState('');

  console.log(id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
    setId(' ');
  };

  React.useEffect(() => {
    fetchBooks();
  }, [open, id]);

  const handleEditBook = (id) => {
    console.log(id, 'jk');
    setId(id);
    setEditOpen(true);
  };

  const handleDeleteBook = (id) => {
    console.log('logffff');
    setId(id);
    console.log('t', id);
    setDeleteOpen(true);
  };

  const handleSingleBookShow = (id) => {
    console.log(id, 'idddd');
    setSingleBookId(id);
    setShowSingleBook(true);
  };

  console.log(showSingleBook, SingleBookId, 'singlebook');

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get('/api/v1/get-books');
      setBooks(data.books);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="container">
          <div className="product-box">
            <div className="product-main">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="title">New Products</h2>
                <button className="add-book-btn" onClick={handleClickOpen}>
                  add book
                </button>
              </div>
              <div className="product-grid">
                {books?.map((item) => (
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src={item.thumbnail.url}
                        alt="Mens Winter Leathers Jackets"
                        width={300}
                        className="product-img default"
                      />
                      <img
                        src={item.thumbnail.url}
                        alt="Mens Winter Leathers Jackets"
                        width={300}
                        className="product-img hover"
                      />
                      <div className="showcase-actions">
                        <button className="btn-action">
                          <IoMdClose
                            className="ion-icon"
                            onClick={() => handleDeleteBook(item._id)}
                          />
                        </button>
                        <button className="btn-action">
                          <IoMdEye
                            className="ion-icon"
                            onClick={() => handleSingleBookShow(item._id)}
                          />
                        </button>
                        <button className="btn-action">
                          <IoMdCreate
                            onClick={() => handleEditBook(item._id)}
                            className="ion-icon"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="showcase-content">
                      <a href="#" className="showcase-category">
                        {item?.title}
                      </a>
                      <a href="#">
                        <h3 className="showcase-title">{item?.author}</h3>
                      </a>
                      <div className="showcase-rating">

                      {[...Array(item.rating)].map((_, index) => (
    <IoMdStar key={index} className="ion-icon" />
  ))}
                       
                      </div>
                      <div className="price-box">
                        <p className="price">${item?.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSingleBook && <SingleBook id={SingleBookId} />}
      <AddBook open={open} handleClose={handleClose} />
      <Alert open={deleteOpen} handleClose={handleClose} id={id} />
      <EditBook open={editOpen} handleClose={handleClose} id={id}/>
</>
      )
      }

      export default  Product