import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Seattle",
    "Los Angeles",
    "Chicago",
  ];

  let selectedIndex = 0;
  //hook
  useState;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex === index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
