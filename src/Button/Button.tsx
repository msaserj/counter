import React from 'react';
import classes from "./Button.module.css"

type ButtonType = {
    name: string
    callBack: ()=> void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
      props.callBack()
    }
    return (
        <button onClick={onClickHandler} className={classes.button}>{props.name}</button>
    );
};
