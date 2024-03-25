import { useState, useEffect } from 'react';
import './style.css';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return <div className="counter">
        <h3>{count}</h3>
        <button
            style={{fontSize: "0.8em", padding: "0.5em"}}
            onClick={() => setCount(count + 1)}>
            +1
        </button>
    </div>;
}

export default Counter;