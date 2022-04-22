import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./Tablo";

function App() {
    //incremet
    let [count, setCount] = useState(0)
    let increment = () => {
        setCount(count += 1)
    }

    // change button action
    let buttonType: string = "button"
    let condition: boolean = false

    if (count === 5) {
        buttonType = "button-disabled"
        condition = true
    }

    // reset
    let reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div className="window">
                <Tablo count={count}/>
                <div className="buttons">
                    <button disabled={condition} onClick={increment} className={buttonType}>Increment</button>
                    <button onClick={reset} className="button">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;


