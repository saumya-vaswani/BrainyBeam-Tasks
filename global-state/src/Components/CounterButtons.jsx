import { useCounter } from './CounterContext';

const CounterButtons = () => {
    const { dispatch } = useCounter(); // Access the global dispatch function

    return (
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default CounterButtons;
