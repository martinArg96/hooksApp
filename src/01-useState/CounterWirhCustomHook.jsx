import { useCounter } from "../hooks/useCounter"

export const CounterWirhCustomHook = () => {

    const {counter,increment,decrement,reset} = useCounter(5)

  return (
    <div>
        <h1>Counter with custom hook: {counter}</h1>
        <hr />

        <button onClick={() => increment(3)} className="btn btn-primary">+1</button>
        <button onClick={reset}  className="btn btn-primary">reset</button>
        <button onClick={() =>decrement(3)} className="btn btn-primary">-1</button>
    
    </div>
    

  )
}
