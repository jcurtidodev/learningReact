import { Dispatch } from 'react'
import type { MenuItem } from '../types'
import type { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between hover:transition-all hover:bg-teal-300 hover:border-r-8'
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      <p>{item.name}</p>
      <p className='font-black pr-4'>{item.price}$</p>
    </button>
  )
}
