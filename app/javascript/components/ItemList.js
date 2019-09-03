import React from "react";
import axios from "axios";
import Item from "./Item";

class ItemList extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios.get("/items").then(response => {
      this.setState({ items: response.data.items });
    });
  }

  renderItems = () => {
    return this.state.items.map(item => (
      <Item
        name={item.name}
        description={item.description}
        price={item.price}
        images={item.images}
      />
    ));
  };

  render() {
    return <div className="item-list">{this.renderItems()}</div>;
  }
}

export default ItemList;
