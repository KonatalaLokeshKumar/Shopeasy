import { createContext, useReducer } from "react";

export const GlobalCartContext   = createContext();

const initialState = {
  cart: []
};

const cartReducer = (state, action)=> {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
}

export function GlobalCartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <GlobalCartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </GlobalCartContext.Provider>
  );
}