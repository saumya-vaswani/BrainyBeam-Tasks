import { createContext, useContext, useReducer } from 'react';

// Initial State
const initialState = { count: 0 };

// Reducer function to manage state changes
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

// Create Context
const CounterContext = createContext();

// Custom hook to use the CounterContext
export const useCounter = () => useContext(CounterContext);

// Context Provider Component
export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};
