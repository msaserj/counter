import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import classes from "./Counter.module.css";

type SettingsType = {
    setNumHandler: () => void
    changeMinValue: (min:number) => void
    changeMaxValue: (max:number) => void
    localMin: number
    localMax: number
    resetSettings: () => void

}

export const Settings = (props: SettingsType) => {

//onChange handlers
    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(event.currentTarget.valueAsNumber)
    }
    const onChangeHandlerMin = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(event.currentTarget.valueAsNumber)
    }

// set min max settings to local storage and counter state
    const setNumbersHandler = () => {
        if (props.localMax > props.localMin && props.localMax > 0 && props.localMin >= 0) {
            props.setNumHandler()
        }
    }

    const resetSettingsHandler = () => {
        props.resetSettings()
    }

    let disabledClass = classes.disabledclass
    let abledClass = classes.abledclass


    return (
        <div className="counter">
            <div className="window">
                <div className="window">
                    <div className="input-block">
                        <p>max value</p>
                        <div className="input-div">
                            <input
                                onChange={onChangeHandlerMax}
                                value={props.localMax}
                                className={props.localMax>=0 && props.localMax > props.localMin ? "input" : "input input-red"} type="number"/>
                        </div>
                    </div>
                    <div className="input-block">
                        <p>min value</p>
                        <div className="input-div">
                            <input onChange={onChangeHandlerMin}
                                   value={props.localMin}
                                   className={props.localMin>=0 && props.localMax > props.localMin ? "input" : "input input-red"} type="number"/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button callBack={setNumbersHandler} name="set numbers" disabledClass={disabledClass}/>
                    <Button callBack={resetSettingsHandler} name="reset to null" disabledClass={disabledClass}/>
                </div>
            </div>
        </div>
    );
};
