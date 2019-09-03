import React from "react"

const NavBar = () => {
    return (
      <nav className="navbar">
        <span class="shopper">Shopper</span>
        <div className="nav-item-container">
            <span className="nav-item">Home</span>
            <span className="nav-item">About</span>
            <span className="nav-item">Items</span>
        </div>
      </nav>
    );  
}

export default NavBar