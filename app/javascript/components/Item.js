import React from "react"
import PropTypes from "prop-types"
class Item extends React.Component {
  render () {

    // console.log(this.props.images)

    return (
      <React.Fragment>
        <div className="item">
          <div className="itemImage">{this.props.images}</div>
          <div className="itemDetails">
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            <p>{this.props.price}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
  price: PropTypes.string
};
export default Item
