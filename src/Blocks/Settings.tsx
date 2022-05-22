import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

type SettingsType = {
    setMaxNumHandler: (max: number) => void
    setMinNumHandler: (min: number) => void
    // resetNumCallBack: () => void

}

export const Settings = (props: SettingsType) => {
// settings state
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)


//onChange handlers
    const onChangeHandlerMax = (event: any) => {
        let maxValue = event.target.value
        setMax(Math.round(maxValue))
    }
    const onChangeHandlerMin = (event: any) => {
        let minValue = event.target.value
        setMin(Math.round(minValue))
    }

// set to app state from settings state


    const setNumbers = () => {
        if (max > min && max > 0 && min >= 0) {
            props.setMaxNumHandler(max)
            props.setMinNumHandler(min)
        }
    }
    const resetSettings = () => {
        setMin(0)
        setMax(0)
        props.setMaxNumHandler(0)
        props.setMinNumHandler(0)
    }

    return (
        <div className="counter">
            <div className="window">
                <div className="window">
                    <div className="input-block">
                        <p>max value</p>
                        <div className="input-div">
                            <input onChange={onChangeHandlerMax} value={max} className="input" type="number"/>
                        </div>
                    </div>
                    <div className="input-block">
                        <p>min value</p>
                        <div className="input-div">
                            <input onChange={onChangeHandlerMin} value={min} className="input" type="number"/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button callBack={setNumbers} name="set numbers"/>
                    <Button callBack={resetSettings} name="reset to null"/>
                </div>
            </div>
        </div>
    );
};
