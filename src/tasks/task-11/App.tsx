import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";

type SomeDTO = { id: number };

export default function App() {
  const [list, setList] = useState<SomeDTO[]>([{ id: 1 }, { id: 2 }]);

  const handleReverseClick = () => {
    setList((old) => old.reverse());
  };

  return {
    <div className="App">
      <h1>I have a bug, click on any item first and then reverse list</h1>

      <ul>
        {list.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <button onClick=(handleReverseClick)>Click me to reverse a list</button>
    </div>
  };
}