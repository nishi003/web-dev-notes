import { useState } from 'react';
import Button from '../Button';
import "./style.css";

const Calculator = () => {
    // create state variables to keep track of in the display
    const [expr, setExpr] = useState("");

    // setup layout first, and then add interactive features
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
    ];

    const update = value => {
        if (value != "=") {
            setExpr(expr + value);
        } else {
            setExpr(eval(expr));
        }
    }

    return <div className="calculator">
        <input type="text" readOnly className='display' value={expr} />
        {buttons.map(button => 
        <Button value={button} update={update} key={"b" + button} /> // key is internal to virtual DOM
        )}
    </div>;
}

export default Calculator;