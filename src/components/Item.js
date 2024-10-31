import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  function handleCart(){
    setAddCart(()=>setAddCart(!addCart))
    // alert("Added to cart successfully!")
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{!addCart ? "Add Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
