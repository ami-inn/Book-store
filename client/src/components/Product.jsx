import React from 'react'

const Product = () => {
  return (
<div className="product-container">
  <div className="container">
    <div className="product-box">
    
      <div className="product-main">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 className="title">New Products</h2>
          <button className="add-book-btn">add book</button>
        </div>
        <div className="product-grid">
            
          <div className="showcase">
            <div className="showcase-banner">
              <img src="./images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
              <img src="./images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">jacket</a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img src="./images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
              <img src="./images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
              <p className="showcase-badge angle black">sale</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">shirt</a>
              <h3>
                <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
              </h3>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">$45.00</p>
                <del>$56.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img src="./images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
              <img src="./images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">Jacket</a>
              <h3>
                <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
              </h3>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-outline" />
                <ion-icon name="star-outline" />
              </div>
              <div className="price-box">
                <p className="price">$58.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>
         

        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Product
