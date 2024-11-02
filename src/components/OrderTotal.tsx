import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {

    const subtotal = order.reduce((total, item) => total + (item.cantidad * item.price), 0)
    const propina = subtotal * tip
    const totalApagar = subtotal + (subtotal * tip)
    return (
        <>
            <div className="space-y-3 mt-5">
                <h2 className="font-black text-2xl">Totales y propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(propina)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalApagar)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalApagar === 0}
                onClick={placeOrder}
            >
                GUARDAR ORDEN
            </button>
        </>
    )
}
