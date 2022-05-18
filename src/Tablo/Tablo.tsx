import React from 'react';
import {Button} from "../Button/Button";

type TabloType = {
    count: number
    increment: () => void
    reset: () => void
    className: any
}

export const Tablo = (props: TabloType) => {

    return (
        <div className="counter">
            <div className="window">
                <div className="input-block">
                    <div className="counter">
                        <p>max value</p>
                        <input type="number"/>
                    </div>
                    <div className="counter">
                        <p>max value</p>
                        <input type="number"/>
                    </div>
                </div>

                <div className="buttons">
                    <Button name={"increment"} callBack={props.increment} />
                    <Button name={"reset"} callBack={props.reset}/>
                </div>
            </div>
            <div className="window">
                <div className="counter">
                    <h1>{props.count}</h1>
                </div>
                <div className="buttons">
                    <Button name={"increment"} callBack={props.increment} />
                    <Button name={"reset"} callBack={props.reset}/>
                </div>
            </div>
        </div>

    );
};
