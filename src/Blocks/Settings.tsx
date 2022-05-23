import React, {ChangeEvent} from 'react';
import {Button} from "../ButtonAndInput/Button";
import classes from "./Counter.module.css";
import {Input} from "../ButtonAndInput/Input";

type SettingsType = {
    setNumHandler: () => void
    changeMinValue: (min: number) => void
    changeMaxValue: (max: number) => void
    localMin: number
    localMax: number
    resetSettings: () => void

}

export const Settings = (props: SettingsType) => {

//onChange handlers

    const onChangeHandlerMax = (num: number) => {
        props.changeMaxValue(num)
    }
const onChangeHandlerMin = (num: number) => {
        props.changeMinValue(num)
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

                            <Input
                                // onChange={onChangeHandlerMax}
                                value={props.localMax}
                                // className={props.localMax>=0 && props.localMax > props.localMin ? "input" : "input input-red"}
                                // type="number"
                                setValue={onChangeHandlerMax}/>
                        </div>
                    </div>
                    <div className="input-block">
                        <p>min value</p>
                        <div className="input-div">
                            <Input
                                // onChange={onChangeHandlerMax}
                                value={props.localMin}
                                // className={props.localMax>=0 && props.localMax > props.localMin ? "input" : "input input-red"}
                                // type="number"
                                setValue={onChangeHandlerMin}/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button callBack={setNumbersHandler} name="set numbers" disabledClass={disabledClass}
                            disable={false}/>
                    <Button callBack={resetSettingsHandler} name="reset to null" disabledClass={disabledClass}
                            disable={false}/>
                </div>
            </div>
        </div>
    );
};
