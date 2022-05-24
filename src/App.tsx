import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Blocks/Settings"
import {Counter} from "./Blocks/Counter";


function App() {
    // стейты с числами
    const [localMin, setLocalMin] = useState(0)
    const [localMax, setLocalMax] = useState(0)
    const [counter, setCounter] = useState(0)
    // активность кнопки Set
    const [setButtonActive, setSetButtonActive] = useState(true)
    // активность кнопки increment
    const [incButtonActive, setIncButtonActive] = useState(false)
    // статус табла
    const [tabloStatus, setTabloStatus] = useState('')

    // сравнение значений, установка статуса табла
    const checkHandler = () => {
        if (localMin >= localMax || localMax < 0 || localMin < 0) {
            setTabloStatus('error')
        } else {
            setTabloStatus('set')
        }
    }
    useEffect(() => {
        checkHandler()
    },[localMax, localMin])

    // onChange
    const changeMaxValue = (max: number) => {
        setLocalMax(max)
        setSetButtonActive(false)
    }
    const changeMinValue = (min: number) => {
        setLocalMin(min)
        setSetButtonActive(false)
        setTabloStatus('set')
    }

    // Callback для закидывания значений из local стейтов в стэйт counter и localStorage
    const setNumHandler = () => {
        setCounter(localMin)
        setSetButtonActive(true)
        setIncButtonActive(false)
        setTabloStatus('')
        localStorage.setItem('state-counter', JSON.stringify(
            {"min": Number(localMin), "max": Number(localMax), "count": Number(localMin)}))
    }

    // не работает!! Хотел закидывать в localstate значение counter
    //  useEffect(() => {
    //      // localStorage.setItem('state-counter', JSON.stringify(
    //      //     {"min": Number(localMin), "max": Number(localMax), "count": Number(counter)}))
    //  }, )

    // подгружаем из localState значения
    useEffect(() => {
        let counterObj = localStorage.getItem('state-counter')
        if (counterObj) {
            let newObj = JSON.parse(counterObj)
            setLocalMin(newObj.min)
            setLocalMax(newObj.max)
            setCounter(newObj.count)
        }
    }, [])

    // вызываем инкремент стейта Counter из компоненты Counter, статус табло и деактивация кнопки
    const increment = () => {
        if (counter < localMax) {
            setCounter(Number(counter) + 1)
            setTabloStatus('')
        } else if (counter === localMax) {
            setIncButtonActive(true)
        }
    }
    // сброс значения counter в минимальное, вызываем из компоненты Counter
    const resetCounter = () => {
        setCounter(localMin)
        setIncButtonActive(false)
    }
    // полный сброс
    const resetSettings = () => {
        localStorage.setItem('state-counter', JSON.stringify({"min": 0, "max": 0, "count": 0}))
        setLocalMin(0)
        setLocalMax(0)
        setCounter(0)
        setSetButtonActive(false)
    }
    // стилизация инпутов и каунтера
    let InputClassMax = localMax < 0 || localMax === localMin || localMax < localMin ? "error" : '';
    let InputClassMin = localMin < 0 || localMax === localMin || localMax < localMin ? "error" : '';
    let redCounter = localMax === counter;

    return (
        <div className="App">
            <Settings
                setNumHandler={setNumHandler}
                localMax={localMax} localMin={localMin}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                resetSettings={resetSettings}
                inputClassMax={InputClassMax}
                inputClassMin={InputClassMin}
                activeButtonSet={setButtonActive}/>
            <Counter
                counter={counter}
                increment={increment}
                resetCounter={resetCounter}
                redCounter={redCounter}
                activeButtonInc={incButtonActive} status={tabloStatus}/>
        </div>
    );
}

export default App;


