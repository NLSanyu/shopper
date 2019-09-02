import React from "react";
import Item from "./Item"

const ItemList = props => {
  console.log(props.items[1].images)

  const items = props.items ? props.items : [];
  const eachItem = items.map(item => (
    <Item
      name={item.name}
      description={item.description}
      price={item.price}
      images={item.images}
    />
  ));

  return (
    <div className="itemList">{eachItem}</div>
  );

}

export default ItemList
