import React, {useState} from 'react';
import Counter from './Counter';
import './App.css';

function App() {

  const [counters, setCounters] = useState([
    {id: 1, counter: 1, buttons: [1, 2, 3]},
    {id: 2, counter: 2, buttons: [1, 2, 3]},
    {id: 3, counter: 3, buttons: [1, 2, 3]},
  ])

  const mathAction = (id: number, digit: number) => {
    const newCounter = counters.map(el => {
      if (el.id === id) {
        return {...el, counter: el.counter + digit}
      }
      return el;
    })
    setCounters(newCounter)
  }


  return (
      <div>
        <h1>Counter with Typescript</h1>
        {counters.map(el => <Counter counter={el} mathAction={mathAction} key={el.id}/>)}


      </div>
  );
}

export default App;