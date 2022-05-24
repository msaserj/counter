import React from 'react';
import css from "./Button.module.css"

type ButtonType = {
    name: string
    callBack: () => void
    disabledClass?: string
    activeButton: boolean
}
export const Button = (props: ButtonType) => {

    let isActive = props.activeButton ? css.disabled : css.button
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button
            onClick={onClickHandler}
            className={isActive}
            disabled={props.activeButton}
        >{props.name}</button>
    );
};
