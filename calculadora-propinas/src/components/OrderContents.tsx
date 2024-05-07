import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentProps) {
  return (
    <div>
      <h2 className='font-bold text-4xl'>Consumo</h2>

      <div className='space-y-3 mt-10'>
        {order.length === 0 ?
        <p className="text-center">La lista está vacía</p>
      : (
        order.map(item => (
          <div key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" 
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="text-lg font-bold">
                Cantidad: {item.quantity} - {formatCurrency(item.price* item.quantity)}
              </p>
            </div>

              <button
                className="bg-red-600 h-8 w-8 text-white font-bold rounded-full"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
          </div>
        ))
      )}
      </div>
    </div>
  )
}
