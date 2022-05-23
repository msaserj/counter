import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setValue:(num: number) => void
    value: number
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.valueAsNumber)
    }
    return (
            <input value={props.value} onChange={onChangeInputHandler} type="number"/>
    );
};

