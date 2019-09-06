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

  toggleAddItem = () => {
    this.setState({
      toggleAddItem: !this.state.toggleAddItem
    });
  };

  renderItems = () => {
    return this.state.items.map(item => (
      <Item
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
      />
    ));
  };

  render() {
    return (
      <div className="item-list-wrapper">
        <SideNav
          toggleAddItem={this.toggleAddItem}
          itemOptionText={this.state.toggleAddItem ? "View items" : "Add item"}
        />
        <div className="item-list">
          {this.state.toggleAddItem ? <AddItem toggleAddItem={this.toggleAddItem}/> : this.renderItems()}
        </div>
      </div>
    );
  }
}

export default ItemList;
