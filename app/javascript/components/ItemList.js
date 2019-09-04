import React from "react";
import axios from "axios";
import Item from "./Item";
import AddItem from "./AddItem";
import SideNav from "./SideNav";

class ItemList extends React.Component {
  state = {
    items: [],
    toggleAddItem: false
  };

  componentDidMount() {
    axios.get("/items").then(response => {
      this.setState({ items: response.data.items });
    });
  }

  handleAddItem = () => {
    this.setState({
      toggleAddItem: !this.state.toggleAddItem
    })
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
    return <div className="item-list-wrapper">
      <SideNav handleAddItem={this.handleAddItem} itemOptionText={ this.state.toggleAddItem ? "View items" : "Add items" }/>
      <div className="item-list">
        { this.state.toggleAddItem ? <AddItem/> : this.renderItems() }
      </div>
    </div>;
  }
}

export default ItemList;
