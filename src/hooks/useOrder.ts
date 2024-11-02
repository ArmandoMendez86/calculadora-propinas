import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id == item.id);
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id == item.id ? { ...orderItem, cantidad: orderItem.cantidad + 1 } : orderItem)
            setOrder(updateOrder)
        } else {

            const newItem = { ...item, cantidad: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        const updatedOrder = order
            .map(item => {
                if (item.id === id && item.cantidad >= 1) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return item;
            })
            .filter(item => !(item.id === id && item.cantidad === 0));
        setOrder(updatedOrder);
    };



    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        order,
        removeItem,
        tip,
        setTip,
        placeOrder

    }
}