import React, {useState} from 'react';
import {Button} from "../Button/Button";

type TabloType = {
    count: number
    increment: () => void
    reset: () => void
}

export const Tablo = (props: TabloType) => {

    return (
        <div className="window">
            <div className="counter">
                <h1>{props.count}</h1>
            </div>
            <div className="buttons">
                <Button name={"increment"} callBack={props.increment}/>
                <Button name={"reset"} callBack={props.reset}/>
            </div>
        </div>
    );
};
