import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer-category">
      <div className="container">
        <h2 className="footer-category-title">Brand directory</h2>
        <div className="footer-category-box">
          <h3 className="category-box-title">Fashion :</h3>
          <a href="#" className="footer-category-link">T-shirt</a>
          <a href="#" className="footer-category-link">Shirts</a>
        </div>
        <div className="footer-category-box">
          <h3 className="category-box-title">footwear :</h3>
          <a href="#" className="footer-category-link">sport</a>
          <a href="#" className="footer-category-link">formal</a>
          <div className="footer-category-box">
            <h3 className="category-box-title">jewellery :</h3>
            <a href="#" className="footer-category-link">Necklace</a>
            <a href="#" className="footer-category-link">Earrings</a>
          </div>
          <div className="footer-category-box">
            <h3 className="category-box-title">cosmetics :</h3>
            <a href="#" className="footer-category-link">Shampoo</a>
            <a href="#" className="footer-category-link">Bodywash</a>
          </div>
        </div>
      </div>
      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Fashion</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Electronic</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Cosmetic</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Health</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Watches</a>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Prices drop</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">New products</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Best sales</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Contact us</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Sitemap</a>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Delivery</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Legal Notice</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Terms and conditions</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">About us</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Secure payment</a>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Prices drop</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">New products</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Best sales</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Contact us</a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">Sitemap</a>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="location-outline" />
              </div>
              <address className="content">
                419 State 414 Rte
                Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="call-outline" />
              </div>
              <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="mail-outline" />
              </div>
              <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>
            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <img src="./images/payment.png" alt="payment method" className="payment-img" />
          <p className="copyright">
            Copyright © <a href="#">Anon</a> all rights reserved.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
