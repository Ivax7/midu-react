import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

// 1. Crear contexto
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispacth] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispacth({
    type: 'ADD_TO_CART',
    payload: product
  })
  
  const removeFromCart = product => dispacth({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispacth({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart}
}
// 2. Crear provider
  // la dependencia de usar React Context es MÍNIMA
export function CartProvider ({ children }) {

const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return  (
    <CartContext.Provider value = {{
    cart: state,
    addToCart,
    removeFromCart,
    clearCart
    }}
    >
    {children}
    </CartContext.Provider>
  )
}