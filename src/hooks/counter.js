import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function useCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    const reset = () => dispatch({ type: 'reset' });
  
    return { count: state.count, increment, decrement, reset };
  }
  
  export default useCounter;