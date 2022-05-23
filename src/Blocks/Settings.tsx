import React from 'react';
import {Button} from "../Button/Button";

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
    const onChangeHandlerMax = (event: any) => {
        props.changeMaxValue(event.target.value)
    }
    const onChangeHandlerMin = (event: any) => {
        props.changeMinValue(event.target.value)
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

    return (
        <div className="counter">
            <div className="window">
                <div className="window">
                    <div className="input-block">
                        <p>max value</p>
                        <div className="input-div">
                            <input onChange={onChangeHandlerMax} value={props.localMax} className="input" type="number"/>
                        </div>
                    </div>
                    <div className="input-block">
                        <p>min value</p>
                        <div className="input-div">
                            <input onChange={onChangeHandlerMin} value={props.localMin} className="input" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button callBack={setNumbersHandler} name="set numbers"/>
                    <Button callBack={resetSettingsHandler} name="reset to null"/>
                </div>
            </div>
        </div>
    );
};
