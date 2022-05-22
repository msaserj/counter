import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

type CounterType = {
    localMin: number
    localMax: number

}


export const Counter = (props: CounterType) => {
    const [value, setValue] = useState(0)

    useEffect(()=> {
        resetHandler()
    }, [])

    useEffect(()=> {
        localStorage.setItem('counterValue', JSON.stringify(value))

    }, [value])

    const incHandler = () => {
        if (value < props.localMax) {

            setValue(value + 1)
        }


    }
    const resetHandler = () => {
        let startValue = localStorage.getItem('min')
        if (startValue) {
            let newValue = JSON.parse(startValue)

            return setValue(Number(newValue))
        }
    }


    return (
        <div className="counter">
            <div className="window">
                <div className="counter window">
                    <h1>{value}</h1>
                </div>
                <div className="buttons">
                    <Button callBack={incHandler} name="increment"/>
                    <Button callBack={resetHandler} name="reset"/>
                </div>
            </div>
        </div>

    );
};
