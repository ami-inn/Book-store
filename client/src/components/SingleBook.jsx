import React, { useEffect, useState } from 'react'
import book2 from '../assets/assets/images/products/book-2.jpg'
import axios from 'axios';

const SingleBook = ({id}) => {
    console.log('ideeeeeeeeeeee',id);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      title: "",
      author: "",
      rating: 0,
      price: 0,
      summary: "",
      thumbnail: null, // To store the selected image file
    });
    const fetchBook = async () => {
        try {
          const { data } = await axios.get(`/api/v1/book/${id}`);
          var bookData = data.book;
    
          setFormData({
            title: bookData.title,
            author: bookData.author,
            rating: bookData.rating,
            price: bookData.price,
            summary: bookData.summary,
            thumbnail:bookData.thumbnail.url
          });
    
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchBook();
      }, [id]);

  return (

   <div className="product-featured" data-aos="zoom-in">
  {/* <h2 className="title">Deal of the day</h2> */}
  {
    loading?<div>loading..</div>:
    <div className="showcase-wrapper has-scrollbar">
    <div className="showcase-container">
      <div className="showcase">
        <div className="showcase-banner">
          <img src={formData?.thumbnail} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
        </div>
        <div className="showcase-content">
          <div className="showcase-rating">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star-outline" />
            <ion-icon name="star-outline" />
          </div>
          <a href="#">
            <h3 className="showcase-title">{formData.title}</h3>
          </a>
          <p className="showcase-desc">
        {formData.author}
          </p>
          <p className="showcase-desc">
        {formData.summary}
          </p>
          <div className="price-box">
            <p className="price">${formData.price}</p>
            {/* <del>$200.00</del> */}
          </div>
          <button className="add-cart-btn">Read Now</button>


        </div>
      </div>
    </div>

  </div>
  }

</div>

  )
}

export default SingleBook
