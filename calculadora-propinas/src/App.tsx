import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import OrderTotals from "./components/OrderTotals"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  const reactiveClasses = (length: number) => {
    return length <= 0 ?
      'p-5 border border-solid border-slate-300 rounded-sm space-y-10 grid items-center text-xl font-bold'
      : 'p-5 border border-solid border-slate-300 rounded-sm space-y-10'
  }

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>


        <div className={reactiveClasses(order.length)}>
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La lista está vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
