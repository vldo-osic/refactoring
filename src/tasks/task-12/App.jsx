import { useState } from "react";

const ZERO = 0;

export default function Counter() {
    const [count, setCount] = useState(ZERO);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={increment}>Кнопка</button>
        </div>
    );
}