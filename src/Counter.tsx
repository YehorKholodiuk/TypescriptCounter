import React from 'react';
import './App.css';
import Button from "./Button";

interface ICounters {
    id: number;
    counter: number;
    buttons: number[];
}

interface IProps {
    counter: ICounters;
    mathAction: object;
}

function Counter(props: IProps) {

    return (
        <div>
            {props.counter.buttons.reverse().map(el => <Button button={-el} mathAction={props.mathAction} counterId={props.counter.id} key={Math.random()} />)}
            {' '}{props.counter.counter}{' '}
            {props.counter.buttons.reverse().map(el => <Button button={el} mathAction={props.mathAction} counterId={props.counter.id} key={Math.random()} />)}
        </div>
    );
}

export default Counter;