import React from 'react'
import "./HomePage.scss"

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-items">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">TOPS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
