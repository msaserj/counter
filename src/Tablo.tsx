import React from 'react';

type CountPropsType = {
    count: number
}

export const Tablo = (props: CountPropsType) => {
    return (
        <div className="counter">
            <h2>{props.count}</h2>
        </div>

    );
};

