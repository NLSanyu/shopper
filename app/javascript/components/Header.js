import React from "react"
import NavBar from "./NavBar"
import HeaderImage from './images/tshirts-bg.jpg'

const Header = () => {
    return (
      <div className="header"> 
          <NavBar/>
          <div className="header-image">
            <div className="shopper-tagline">Buy and sell items online, anywhere, anytime!</div>
            <img src={HeaderImage} alt="Image of tshirts"/>
          </div>
      </div>
    );  
}

export default Header
