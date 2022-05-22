import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

type CounterType = {
   //

}


export const Counter = (props: CounterType) => {
    const [value, setValue] = useState(0)


    const incHandler = () => {
            setValue(value + 1)
    }

    const resetHandler = () => {
            return setValue(0)

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
