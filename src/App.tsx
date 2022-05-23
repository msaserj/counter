import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Blocks/Settings"
import {Counter} from "./Blocks/Counter";


function App() {
    const [localMin, setLocalMin] = useState(0)
    const [localMax, setLocalMax] = useState(0)
    const [localCounter, setLocalCounter] = useState(0)
    console.log(localMin)
    console.log(localMax)

// Callback для закидывания значений их стэйта Settings в стэйт App
    const setNumHandler = (max: number, min: number) => {
        setLocalMax(max)
        setLocalMin(min)
        setLocalCounter(min)
        localStorage.setItem('min', JSON.stringify(min))
        localStorage.setItem('max', JSON.stringify(max))
        localStorage.setItem('counter', JSON.stringify(min))
    }

    const increment = () => {
        if (localCounter < localMax) {
            setLocalCounter(Number(localCounter) + 1)
        }
    }

    const resetCounter = () => {
        setLocalCounter(localMin)
    }

    return (
        <div className="App">
            <Settings
                setNumHandler={setNumHandler}

            />
            <Counter
                localCounter={localCounter}
                increment={increment}
                resetCounter={resetCounter}
             />
        </div>
    );
}

export default App;


