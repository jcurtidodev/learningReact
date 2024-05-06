import type { MenuItem } from '../types'

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between hover:transition-all hover:bg-teal-300 hover:border-r-8'
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className='font-black pr-4'>{item.price}$</p>
    </button>
  )
}
