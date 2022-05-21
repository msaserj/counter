import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Blocks/Settings"
import {Counter} from "./Blocks/Counter";

function App() {
    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const resetHandler = () => {
        setValue(0)
    }

    const setNumHandler = () => {

        localStorage.setItem('counterOne', JSON.stringify(value))

    }

    const resetNumHandler = () => {
    }
    return (
        <div className="App">
           <Settings
            resetNumCallBack={resetNumHandler}
            setNumCallBack={setNumHandler}
            value={value}/>

            <Counter

             value={value} incCallBack={incHandler} resetCallBack={resetHandler} />
        </div>
    );
}

export default App;


