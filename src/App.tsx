import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Blocks/Settings"
import {Counter} from "./Blocks/Counter";


function App() {
    const [localMin, setLocalMin] = useState(0)
    const [localMax, setLocalMax] = useState(0)

    const setMaxNumHandler = (max: number) => {
        setLocalMax(max)
        console.log(localMin)

    }
    const setMinNumHandler = (min: number) => {
        setLocalMin(min)
        console.log(localMax)
    }

    return (
        <div className="App">
            <Settings
                setMaxNumHandler={setMaxNumHandler}
                setMinNumHandler={setMinNumHandler}
            />
            <Counter
                // localMax={localMax}
                // localMin={localMin}
            />
        </div>
    );
}

export default App;


