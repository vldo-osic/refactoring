// import "./styles.css";
import { useState } from "react";
import Item from "./Item";

export type SomeDTO = { id: number };

const INIT_LIST: SomeDTO[] = [{ id: 1 }, { id: 2 }]

export default function App() {
  const [list, setList] = useState(() => INIT_LIST);

  const handleReverseClick = () => {
	  setList((old) => old.toReversed());
  };

  return (
		<div className="App">
			<h1>I have a bug, click on any item first and then reverse list</h1>

			<ul>
				{list.map((item) => (
					<li key={item.id}>
						<Item item={item} />
					</li>
				))}
			</ul>
			<button onClick={handleReverseClick}>Click me to reverse a list</button>
		</div>
	);
}