import React from 'react'
import payment from '../assets/assets/images/payment.png'

const Footer = () => {
  return (
    <>
    <div className="footer-category">

      <div className="footer-bottom">
        <div className="container">
          <img src={payment} alt="payment method" className="payment-img" />
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
