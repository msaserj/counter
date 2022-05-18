import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./Tablo/Tablo"

function App() {

    //incremet

    let buttonType: string = "button"
    let condition: boolean = false

    const [count, setCount] = useState(0)
    const increment = () => {
        if (count === 5) {


            return
        }
        setCount(count + 1)
    }

    // change button action


    if (count === 5) {
        buttonType = "button-disabled"
        condition = true
    }

    // reset
    const reset = () => setCount(0)

    return (
        <div className="App">
           <Tablo
               reset={reset}
               increment={increment}
               count={count}
               className={buttonType}
           />
        </div>
    );
}

export default App;


