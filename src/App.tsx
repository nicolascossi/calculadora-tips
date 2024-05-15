import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"



function App() {
  

  const {order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5 text-white">
        <h1 className="font-black text-center text-4xl ">Calculadora de propinas y consumos</h1>
      </header>


      <main className="py-20 max-w-7xl mx-auto grid md:grid-cols-2">
        <div>
          <h2 className="text-left text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10 rounded-lg">
          {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 m-5 rounded-lg space-y-10">

        {order.length > 0 ? (
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
    <p className="text-center text-xl">La orden esta vacia</p>
  )}

          

        </div>
      </main>
    </>
  )
}

export default App
