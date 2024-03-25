import React, { useState } from 'react';
import Input from '../Input';


const Converter = () => {
    const [celsius, setCelsius] = useState(0);

    const fahrenheit = () => { return celsius * 9 / 5 + 32; }

    const update = is_celsius => value => {
        setCelsius(is_celsius ? value : (value - 32) * 5 / 9);
    }

    return <>
        <Input title="Celsius" value={celsius} update={update(true)} />
        <h1>=</h1>
        <Input title="Fahrenheit" value={fahrenheit()} update={update(false)} />
    </>
};

export default Converter;