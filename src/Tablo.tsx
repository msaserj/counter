import React from 'react';

type CountPropsType = {
    count: number
}

export const Tablo = (props: CountPropsType) => {
    return (
        <div className="counter">
            <h1>{props.count}</h1>
        </div>

    );
};

