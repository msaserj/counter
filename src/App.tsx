import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./Tablo";

function App() {

    let [count, setCount] = useState(0)
    let increment = () => {
        setCount(count += 1)
    }

    let reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div className="window">
                <Tablo count={count}/>
                <div className="buttons">
                    <button onClick={increment} className="button-disabled">Increment</button>
                    <button onClick={reset} className="button">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
