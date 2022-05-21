import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

type CounterType = {
    value: number
    incCallBack: () => void
    resetCallBack: () => void
}


export const Counter = (props: CounterType) => {
    const [value, setValue] = useState(0)

    useEffect(()=> {
        let valueString = localStorage.getItem('min')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }
    }, [value])

    const incHandler = () => {
        setValue(value + 1)

    }
    const resetHandler = () => {
        localStorage.removeItem('value')
        setValue(0)
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
