import React from 'react';
import {Button} from "../ButtonAndInput/Button";
import classes from "./Counter.module.css";


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
    let disabledClass = classes.disabledclass
    let abledClass = classes.abledclass

    return (
        <div className="counter">
            <div className="window">
                <div className="counter window">

                    <h1>{props.counter}</h1>
                </div>
                <div className="buttons">
                    <Button callBack={incHandler} name="increment" disabledClass={disabledClass} disable={false}/>
                    <Button callBack={resetHandler} name="reset" disabledClass={abledClass} disable={false}/>
                </div>
            </div>
        </div>

    );
};
