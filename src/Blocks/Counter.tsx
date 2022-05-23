import React from 'react';
import {Button} from "../Button/Button";

type CounterType = {
    localCounter: number
    increment: () => void
    resetCounter: () => void
}


export const Counter = (props: CounterType) => {




   // setCounter(props.localMin)

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
                    <h1>{props.localCounter}</h1>
                </div>
                <div className="buttons">
                    <Button callBack={incHandler} name="increment"/>
                    <Button callBack={resetHandler} name="reset"/>
                </div>
            </div>
        </div>

    );
};
