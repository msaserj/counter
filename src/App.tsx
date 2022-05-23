import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Blocks/Settings"
import {Counter} from "./Blocks/Counter";


function App() {
    const [localMin, setLocalMin] = useState(0)
    const [localMax, setLocalMax] = useState(0)
    const [counter, setCounter] = useState(0)
    // onChange
    const changeMaxValue = (max: number) => {
        setLocalMax(max)
    }
    const changeMinValue = (min: number) => {
        setLocalMin(min)
    }

    // Callback для закидывания значений из local стейтов в стэйт counter и localStorage
    const setNumHandler = () => {
        setCounter(localMin)
        localStorage.setItem('state-counter', JSON.stringify(
            {"min": Number(localMin), "max": Number(localMax), "count": Number(localMin)}))
    }

    useEffect(() => {
        let counterObj = localStorage.getItem('state-counter')
        if (counterObj) {
            let newObj = JSON.parse(counterObj)
            setLocalMin(newObj.min)
            setLocalMax(newObj.max)
            setCounter(newObj.count)
            console.log(newObj)
        }
    }, [])
    // useEffect(() => {
    //     localStorage.setItem('state-counter', counter.toString("count": counter))
    // }, [counter])

    // вызываем инкремент стэйта Counter из компоненты Counter
    const increment = () => {
        if (counter < localMax) {
            setCounter(Number(counter) + 1)
        }
    }

    // сброс значения counter в минимальное, вызываем из компоненты Counter
    const resetCounter = () => {
       setCounter(localMin)
        //*
    }

    const resetSettings = () => {
        localStorage.setItem('state-counter', JSON.stringify({"min": 0, "max": 0, "count": 0}))
        setLocalMin(0)
        setLocalMax(0)
        setCounter(0)
    }

    return (
        <div className="App">
            <Settings
                setNumHandler={setNumHandler}
                localMax={localMax} localMin={localMin}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                resetSettings={resetSettings}/>
            <Counter
                counter={counter}
                increment={increment}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;


