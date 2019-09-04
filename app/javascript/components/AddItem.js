import React from "react";

class AddItem extends React.Component {
  render() {
    return (
      <div className="add-item">
        <p className="add-item-title">
          Enter the details of the item you want to sell
        </p>
        <form>
          <div className="item-input">
            <label>Name</label>
            <br />
            <input name="item-name" type="text"></input>
          </div>
          <div className="item-input">
            <label>Description</label>
            <br />
            <input name="item-description" type="text"></input>
          </div>

          <div className="item-input">
            <label>Price</label>
            <br />
            <input name="item-price" type="text"></input>
          </div>
          <input
            type="submit"
            value={"Add item"}
            className="submit-item"
            onClick={console.log("Add item")}
          />
        </form>
      </div>
    );
  }
}

export default AddItem;
