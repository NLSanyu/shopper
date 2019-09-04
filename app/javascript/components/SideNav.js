import React from "react";

const SideNav = props => {
  return (
    <div className="sidenav">
      <ul className="sidenav-options">
        <li onClick={props.handleAddItem}>Add item</li>
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
};

export default SideNav;
