import React from "react";
import axios from "axios";
import { passCsrfToken } from '../util/helpers'

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      image: ""
    };

    this.submitNewItem = this.submitNewItem.bind(this);
  }

  componentDidMount() {
    passCsrfToken(document, axios)
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewItem = event => {
    event.preventDefault();

    const item = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
        // image: this.state.image
    }

    axios
      .post("/items", item)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="add-item">
        <p className="add-item-title">
          Enter the details of the item you want to sell
        </p>
        <form onSubmit={event => this.submitNewItem(event)}>
          <div className="item-input">
            <label>Name</label>
            <br />
            <input
              name="name"
              type="text"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="item-input">
            <label>Description</label>
            <br />
            <input
              name="description"
              type="text"
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="item-input">
            <label>Price</label>
            <br />
            <input
              name="price"
              type="text"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="item-input">
            <label>Add photos of your item</label>
            <br />
            <input
              name="image"
              type="file"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <button
            className="submit-item"
            // onClick={this.submitNewItem}
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
