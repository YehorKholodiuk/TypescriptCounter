import React from 'react';
import './App.css';

interface IProps {
    button: number;
    mathAction: any;
    counterId: number;
}

function Button(props: IProps) {

    return (
        <button onClick={() => props.mathAction(props.counterId, props.button)}>
    {props.button}
    </button>
);
}

export default Button;