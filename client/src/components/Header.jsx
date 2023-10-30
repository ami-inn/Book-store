import React from 'react'
import {IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin,IoIosSearch, IoMdHeart, IoMdCart, IoIosCloudyNight, IoIosMoon, IoMdPerson} from 'react-icons/io'

const Header = () => {
  return (
<header>
  <div className="header-top">
    <div className="container">
      <ul className="header-social-container">
        <li>
          <a href="#" className="social-link">
           <IoLogoFacebook className='ion-icon' /> 
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <IoLogoInstagram className='ion-icon'/>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
          <IoLogoTwitter className='ion-icon'/>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
          <IoLogoLinkedin className='ion-icon'/>
          </a>
        </li>
      </ul>
      <div className="header-alert-news">
        <p>
          <b>Free Shipping</b>
          This Week 
        </p>
      </div>
      <div className="header-top-actions">
        <select name="currency">
          <option value="usd">USD $</option>
          <option value="eur">EUR €</option>
        </select>
        <select name="language">
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
          <option value="fr">Français</option>
        </select>
        <button className="night-mode">
          <IoIosMoon className='ion-icon'/>
        </button>
      </div>
    </div>
  </div>
  <div className="header-main">
    <div className="container">
      <a href="#" className="header-logo">
        {/* <img src="../assets/" alt="Anon's logo" width={120} height={36} /> */}
        <h1 style={{color:'black'}}>Book Store</h1>
      </a>
      <div className="header-search-container">
        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
        <button className="search-btn">
          <IoIosSearch className='ion-icon'/>
        </button>
      </div>
      <div className="header-user-actions">
        <button className="action-btn">
          <IoMdPerson className='ion-icon' />
        </button>
        <button className="action-btn">
          <IoMdHeart className='ion-icon'/>
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <IoMdCart className='ion-icon'/>
          <span className="count">0</span>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
