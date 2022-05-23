import React from 'react';
import {Button} from "../Button/Button";

type CounterType = {
    counter: number
    increment: () => void
    resetCounter: () => void
}


export const Counter = (props: CounterType) => {


    const incHandler = () => {
        props.increment()
    }

    const resetHandler = () => {
          props.resetCounter()
    }

    return (
        <div className="counter">
            <div className="window">
                <div className="counter window">
                    <h1>{props.counter}</h1>
                </div>
                <div className="buttons">
                    <Button callBack={incHandler} name="increment"/>
                    <Button callBack={resetHandler} name="reset"/>
                </div>
            </div>
        </div>

    );
};
