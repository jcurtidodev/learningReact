import { db } from "../mocks/db"
import { CartItem, Guitar } from "../types/types"

export type CartActions =
  { type: 'add-to-cart', payload: { item: Guitar } } |
  { type: 'remove-from-cart', payload: { id: Guitar['id'] } } |
  { type: 'decrease-quanitity', payload: { id: Guitar['id'] } } |
  { type: 'increase-quanitity', payload: { id: Guitar['id'] } } |
  { type: 'clear-cart' }

export type CartState = {
  data: Guitar[],
  cart: CartItem[]
}

export const initialState: CartState = {
  data: db,
  cart: []
}

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === 'add-to-cart') {

    return {
      ...state
    }
  }

  if (action.type === 'remove-from-cart') {

    return {
      ...state
    }
  }

  if (action.type === 'decrease-quanitity') {

    return {
      ...state
    }
  }

  if (action.type === 'increase-quanitity') {

    return {
      ...state
    }
  }

  if (action.type === 'clear-cart') {

    return {
      ...state
    }
  }

  return state
}