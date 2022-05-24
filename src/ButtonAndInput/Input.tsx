import React, {ChangeEvent} from 'react';
import css from "./Input.module.css"

type InputPropsType = {
    setValue: (num: number) => void
    value: number
    cssClass: string
}

export const Input = (props: InputPropsType) => {

    const finalInputClassName = props.cssClass ? css.inputred : css.input

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.valueAsNumber)
    }
    return (
        <input
            type="number"
            value={props.value}
            onChange={onChangeInputHandler}
            className={finalInputClassName} max={100}/>
    );
};

