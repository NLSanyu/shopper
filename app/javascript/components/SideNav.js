import React from "react";

const SideNav = props => (
  <div className="sidenav">
    <ul className="sidenav-options">
      <li onClick={props.toggleAddItem}>{props.itemOptionText}</li>
      <li>Remove item</li>
      <li>Search items</li>
      <div className="filter-options">
        <p>By Price</p>
        <p>By Type</p>
        <p>By Colour</p>
      </div>
    </ul>
  </div>
);

export default SideNav;
