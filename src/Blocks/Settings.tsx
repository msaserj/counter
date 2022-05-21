import React, {useState} from 'react';
import {Button} from "../Button/Button";

// type SettingsType = {
//     setNumCallBack: (value: number) => void
//     resetNumCallBack: () => void
//     value: number
// }


export const Settings = (props: any) => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const setNumbers = () => {
        if (min < max && min > 0 && max > 0) {
            localStorage.setItem('min', JSON.stringify(min))
            localStorage.setItem('max', JSON.stringify(max))
        } else {
            let tablo = "Incorrect"
        }

    }
    const resetToNull = () => {
        localStorage.removeItem('min')
        localStorage.removeItem('max')
        setMax(0)
        setMin(0)
    }

    const onChangeHandlerMax = (event: any) => {
        setMax(event.target.value)

    }
    const onChangeHandlerMin = (event: any) => {
        setMin(event.target.value)
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
                    <Button callBack={resetToNull} name="reset to null"/>
                </div>
            </div>
        </div>
    );
};
