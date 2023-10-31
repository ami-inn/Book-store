import * as React from 'react';
import book2 from '../assets/assets/images/products/book-2.jpg'
import book1 from '../assets/assets/images/products/book-1.jpg'
import { IoMdCreate, IoMdEye, IoMdHeart, IoMdStar } from 'react-icons/io'
import AddBook from './AddBook';
import axios from 'axios';
import EditBook from './EditBook';
import { editBook } from '../../../server/controllers/bookController';

const Product = () => {

  const [open, setOpen] = React.useState(false);
  const [editOpen,setEditOpen] = React.useState(false)

  const [books,setbooks] = React.useState(null)
  
  const [id,setId]=React.useState('')

  console.log(id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditOpen(false)
    setId("")
  };

  React.useEffect(()=>{
    fetchBooks()
  },[open,id])

  const handleEditBook = (id)=>{
    console.log(id,'jk');
    setId(id)
    setEditOpen(true)

  }

  const fetchBooks = async ()=>{
    try{

      const {data} = await axios.get('/api/v1/get-books')
      setbooks(data.books)

      console.log(data);

    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>

    
  
<div className="product-container">
  <div className="container">
    <div className="product-box">
    
      <div className="product-main">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 className="title">New Products</h2>
          <button className="add-book-btn" onClick={handleClickOpen}>add book</button>
        </div>
        <div className="product-grid">

          {
            books?.map((item)=>(

              <div className="showcase">
              <div className="showcase-banner">
                <img src={book2} alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <img src={book1} alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                {/* <p className="showcase-badge">15%</p> */}
                <div className="showcase-actions">
                  <button className="btn-action">
                    <IoMdHeart className='ion-icon' />
                  </button>
                  <button className="btn-action">
                    <IoMdEye className='ion-icon' />
                  </button>
                  <button className="btn-action">
                    <IoMdCreate onClick={()=>handleEditBook(item._id)} className='ion-icon'/>
                  </button>
                </div>
              </div>
              <div className="showcase-content">
                <a href="#" className="showcase-category">{item?.title}</a>
                <a href="#">
                  <h3 className="showcase-title">{item?.author}</h3>
                </a>
                <div className="showcase-rating">
                  <IoMdStar className='ion-icon' />
                  <IoMdStar className='ion-icon' />
                  <ion-icon name="star-outline" />
                  <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                  <p className="price">${item?.price}</p>
                  {/* <del>$75.00</del> */}
                </div>
              </div>
            </div>

            ))
          }
            

  
         

        </div>
      </div>
    </div>
  </div>
</div>

<AddBook open={open} handleClose={handleClose}/>
<EditBook open={editOpen} handleClose={handleClose} id={id}  />
</>
  )
}

export default Product
