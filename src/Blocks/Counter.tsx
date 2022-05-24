import React from 'react';
import {Button} from "../ButtonAndInput/Button";
import css from "./Counter.module.css"


type CounterType = {
    counter: number
    increment: () => void
    resetCounter: () => void
    activeButtonInc: boolean
    redCounter: boolean
    status: string
}

export const Counter = (props: CounterType) => {

    const incHandler = () => {
        props.increment()
    }

    const resetHandler = () => {
        props.resetCounter()
    }

    const redCounter = props.redCounter ? css.red : css.blue
    // tablo templates
    const tabloNum = <h1 className={redCounter}>{props.counter}</h1>
    const tabloInf = <h4>Enter values<br/>and press "set numbers"</h4>
    const tabloErr = <h2 className={css.red}>Incorrect!</h2>

    return (
        <div className="counter">
            <div className="window">
                <div className="window block">
                    {props.status === 'error' ? tabloErr : props.status === 'set' ? tabloInf : tabloNum}
                </div>
                <div className="buttons-block">
                    <Button callBack={incHandler} name="increment" activeButton={props.activeButtonInc}/>
                    <Button callBack={resetHandler} name="reset" activeButton={false}/>
                </div>
            </div>
        </div>

    );
};
