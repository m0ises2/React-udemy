import { useMemo, useState } from "react";
import { useCounter } from "../hooks/UseCounter"

const heavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos....');
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const momorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
        <h1> Counter: <small> { counter } </small> </h1>

        <hr />

        <h4> { momorizedValue } </h4>

        <button
            className="btn btn-primary mr-2"
            onClick={ () => increment() }
        >
          +1
        </button>

        <button
          className="btn btn-outline-primary ml-2"
          onClick={ () => setShow(!show) }
        >
          Show/hide { JSON.stringify(show) }
        </button>
    </>
  )
}
