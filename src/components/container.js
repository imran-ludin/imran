import "../styles/container.css";
import Button from './button'

import { useState } from "react";

const Container = () => {
  const [counter, setCounter] = useState(0);

  const myCounter = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  

  
  return (
    <div className="div1">
      <button onClick={myCounter}>increament </button>
      <button onClick={decrement}>decreament </button>
      <div> {counter} </div>

      <Button color="orange" width="auto" text="Increment" click={myCounter}/>
      <Button color="red" width="100px" text="Decrement" click={decrement}/>
    </div>
  );
};

export default Container;
