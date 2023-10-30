import React from 'react'
import bannerImg from '../assets/assets/images/banner-1.jpg'
import bannerImg2 from '../assets/assets/images/banner-2.jpg'

const Banner = () => {
  return (
    <div className="banner">
    <div className="container">
      <div className="slider-container has-scrollbar">
        <div className="slider-item">
          <img src={bannerImg} alt="women's latest fashion sale" className="banner-img" />
          <div className="banner-content">
            <p className="banner-subtitle">Discover a World of Knowledge</p>
            <h2 className="banner-title">Explore Our Vast Collection of Books for Every Curious Mind</h2>
            <p className="banner-text">
              starting at $ <b>20</b>.00
            </p>
            <a href="#" className="banner-btn">Shop now</a>
          </div>
        </div>
        <div className="slider-item">
          <img src={bannerImg2} alt="modern sunglasses" className="banner-img" />
          <div className="banner-content">
            <p className="banner-subtitle" style={{color:'white'}}>Discover a World of Knowledge</p>
            <h2 className="banner-title">Explore Our Vast Collection of Books for Every Curious Mind</h2>
            <p className="banner-text">
              starting at $ <b>15</b>.00
            </p>
            <a href="#" className="banner-btn">Shop now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner
