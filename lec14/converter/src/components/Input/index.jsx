import React from 'react';

const Input = ({ title, value, update }) => {
    return <div>
        <h2>{title}</h2>
        <input type="number"
            value={value}
            onChange={event => update(event.target.value)}
            style={{ width: 200, fontSize: '1.5em', padding: '0.2em 0.4em' }} />
    </div>;
}

export default Input;