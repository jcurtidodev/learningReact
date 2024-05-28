import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {

    const foundItem = order.find(orderItem => orderItem.id === item.id)
    if (foundItem) {
      const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
        { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      setOrder(updatedOrder)
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItem['id']) => {
    const updatedOrder = order.filter(item => item.id !== id)
    setOrder(updatedOrder)
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}