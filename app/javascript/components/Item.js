import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <div className="item-card">
        <div className="item-image">{this.props.image}</div>
        <div className="item-details">
          <p>
            <span className="item-detail">{this.props.name}</span>
            <span className="item-detail" id="item-price">
              {this.props.price}
            </span>
          </p>
          <p className="item-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
  price: PropTypes.string
};

export default Item;
