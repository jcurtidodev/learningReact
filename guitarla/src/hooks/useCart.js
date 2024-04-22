import { useState, useEffect } from "react"
import { db } from '../mocks/db.js'
import { useMemo } from "react"

export const useCart = () => {
  const MIN_ITEMS = 1
  const MAX_ITEMS = 5

  const [ data ] = useState(db)
  const [cart, setCart] = useState(() => {
    const cartFromStorage = localStorage.getItem('cart')
    return cartFromStorage ? JSON.parse(cartFromStorage) : []
  })

  // Guardar datos en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)

    if (itemExists >= 0) {
      if (item.quantity >= MAX_ITEMS) return
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }

  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id){
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1 
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function decreaseQuantity(id){
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1 
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart(){
    setCart([])
  }

  // State derivado
  const isEmpty = useMemo( () => cart.length === 0, [cart])
  const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.price * item.quantity), 0), [cart])

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  }
}

