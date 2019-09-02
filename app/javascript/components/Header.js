import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    return (
      <nav className="header">
        <a>Home</a>
        <a>About</a>
        <a>Items</a>
      </nav>
    );
  }
}

export default Header
