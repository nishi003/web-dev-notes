import { useState } from 'react';

const Status = (props) => {
    const [status, setStatus] = useState("good");
    const toggleStatus = () => setStatus(status === "good" ? "bad" : "good");
    return <>
        <h2>Situation is {status}</h2>
        <button onClick={toggleStatus}>Toggle</button>
    </>;
};

export default Status;