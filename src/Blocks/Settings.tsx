import React from 'react';
import {Button} from "../ButtonAndInput/Button";
import {Input} from "../ButtonAndInput/Input";
import css from "./Settings.module.css"

type SettingsType = {
    setNumHandler: () => void
    changeMinValue: (min: number) => void
    changeMaxValue: (max: number) => void
    localMin: number
    localMax: number
    resetSettings: () => void
    inputClassMin: string
    inputClassMax: string
    activeButtonSet: boolean
}

export const Settings = (props: SettingsType) => {

    //onChange handlers
    const onChangeHandlerMax = (num: number) => {
        props.changeMaxValue(Math.floor(num))
    }

    const onChangeHandlerMin = (num: number) => {
        props.changeMinValue(Math.floor(num))
    }

    // set min max settings to local storage and counter state
    const setNumbersHandler = () => {
        if (props.localMax > props.localMin && props.localMax > 0 && props.localMin >= 0) {
            props.setNumHandler()
        }
    }
    // reset all states
    const resetSettingsHandler = () => {
        props.resetSettings()
    }

    return (
        <div className="counter">
            <div className="window">
                <div className="window block">
                    <div className={css.inputblock}>
                        <p>max value</p>
                        <div className={css.input}>
                            <Input value={props.localMax} setValue={onChangeHandlerMax} cssClass={props.inputClassMax}/>
                        </div>
                    </div>
                    <div className={css.inputblock}>
                        <p>min value</p>
                        <div className={css.input}>
                            <Input value={props.localMin} setValue={onChangeHandlerMin} cssClass={props.inputClassMin}/>
                        </div>
                    </div>
                </div>
                <div className="buttons-block">
                    <Button callBack={setNumbersHandler} name="set numbers" activeButton={props.activeButtonSet}/>
                    <Button callBack={resetSettingsHandler} name="reset to null" activeButton={false}/>
                </div>
            </div>
        </div>
    );
};
