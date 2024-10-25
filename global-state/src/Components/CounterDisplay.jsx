import { useCounter } from './CounterContext';

const CounterDisplay = () => {
    const { state } = useCounter(); // Access the global state

    return <h1>Current Count: {state.count}</h1>;
};

export default CounterDisplay;
