import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { IRootState } from "../../../store"
import { useSelector } from "react-redux"


const Cart = () => {
    interface ICart {
        productName: string,
        quantity: number,
        price: number
    }


    const [showdetails, setShowDetails] = useState(false)
    const [carts, setCarts] = useState<ICart[]>([])



    const dispatch: Dispatch<any> = useDispatch()
    const orderCartState = useSelector(
        (state: IRootState) => state.orders
    )

    const studentState = useSelector(
        (state: IRootState) => state.sinhviens
    )


    const handleLoadCartInfo = () => {
        const cartItem: ICart[] = []
        for (const order of orderCartState.orders) {
            const existinCartItem = cartItem.find((cart) => cart.productName === order.productId)

            const student = studentState.sinhviens.find((student) => student._id === order.productId)
            if (student) {
                if (existinCartItem) {
                    existinCartItem.quantity += order.quantity
                } else {
                    cartItem.push({
                        productName: student.name,
                        quantity: order.quantity,
                        price: order.priceProduct
                    })
                }
            }
        }
        setCarts(cartItem)
    }

    const ToTalPRICE = (tonggia: number) => {
        return Number(tonggia).toLocaleString('en-US')
    }

    const ToTalCart = () => {
        let totalCart = 0;
        carts.forEach((item) => {
            totalCart += item.price * item.quantity
        })
        return totalCart
    }

    // Gọi hàm handleLoadCartInfo khi orderCartState thay đổi
    useEffect(() => {
        handleLoadCartInfo()
    }, [orderCartState])


    useEffect(() => {
        if (!showdetails) {
            setCarts([])
        } else {
            handleLoadCartInfo()
        }
    }, [showdetails])
    const handleShowDetail = () => {
        setShowDetails((state) => !state)
    }
    return (
        <>
            <div >
                <h4>CART: {orderCartState.orders.length} </h4>
                <button className="rounded-full bg-orange-500 text-white w-[150px]" onClick={handleShowDetail}>Show Detail</button>
                {showdetails &&
                    <div className="grid-cols-4  ">
                        <table className="table-auto">
                            <thead className="bg-[#bfdaee]">
                                <tr>
                                    <th>Name Product</th>
                                    <th>Price</th>
                                    <th className="pr-[15px]">Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody className="pl-4">
                                {
                                    carts.map((cart, index) => {
                                        return <tr key={index}>
                                            <td>{cart.productName}</td>
                                            <td className="pl-[30px]"> {cart.price}$</td>
                                            <td className="pl-[20px]">{cart.quantity}</td>
                                            <td> {ToTalPRICE(cart.price * cart.quantity)}$</td>
                                        </tr>
                                    })
                                }
                                <tr className="bg-[#bfdaee]">
                                    <td className="">Total Carts:</td>
                                    <td>{ToTalCart()}$</td>
                                </tr>
                            </tbody>


                        </table>
                    </div>}

            </div>

        </>
    )
}

export default Cart