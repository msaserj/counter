import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

type SettingsType = {
    setMaxNumHandler: (max: number) => void
    setMinNumHandler: (min: number) => void
    // resetNumCallBack: () => void


}


export const Settings = (props: SettingsType) => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    useEffect(()=> {
            let startValue = localStorage.getItem('min')
            let endValue = localStorage.getItem('max')
            if (startValue && endValue) {
                let minValue = JSON.parse(startValue)
                let maxValue = JSON.parse(endValue)
                setMin(Number(minValue))
                setMax(Number(maxValue))

        }
    }, [])


    const onChangeHandlerMax = (event: any) => {
        let maxValue = event.target.value
        setMax(maxValue)
    }
    const onChangeHandlerMin = (event: any) => {
        let maxValue = event.target.value
        setMin(maxValue)
    }


    const setNumbers = () => {
        if (max > min && max > 0 && min >= 0) {
            props.setMaxNumHandler(max)
            props.setMinNumHandler(min)
            localStorage.setItem('min', JSON.stringify(min))
            localStorage.setItem('max', JSON.stringify(max))
            localStorage.setItem('counterValue', JSON.stringify(min))
        }
    }
    const resetSettings = () => {
        setMax(0)
        setMin(0)
        props.setMaxNumHandler(max)
        props.setMinNumHandler(min)
        localStorage.setItem('min', JSON.stringify(0))
        localStorage.setItem('max', JSON.stringify(0))
        localStorage.setItem('counterValue', JSON.stringify(0))
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
