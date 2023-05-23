import { useState } from "react";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Seattle",
    "Los Angeles",
    "Chicago",
  ];
  const handleItem = (item: string) => {
    console.log(item)
  }


  return <>
    <div className="container">
      <div className="mb-2"><ListGroup items={items} heading="Cities" onselectItem={handleItem} /></div>

      <div><Buttons>My Button</Buttons></div>
    </div>
  </>
}

export default App;