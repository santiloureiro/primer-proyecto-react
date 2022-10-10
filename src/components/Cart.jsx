/* eslint-disable react/jsx-pascal-case */
import React, { useContext } from "react"
import { useState } from "react"
import Contexts from "../contexts/Items"


function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

const Cart = () => {

    const forceUpdate = useForceUpdate()


    const contexto = useContext(Contexts.cartContext)

    const getTotalPrice = () => {
        let price = 0
        contexto.cart.map((item) => (
            price += item.price))
        return price
    }

    const [state, setState] = useState(contexto.cart)

    const removeFromCart = (i) => {
        contexto.cart.splice(i, 1)
        setState(contexto.cart)
    }

    const totalPrice = getTotalPrice()



    return (

        <div className="bg-white px-20 py-5 rounded-r-2xl">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center">
                <div className="flex shadow-md w-[90vw] my-10">
                    
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{state.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                        </div>
                        
                        {state.map((item, i) => (
                                            <div key={i} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                            <div className="flex w-2/5">             
                                            <div className="w-20">
                                                <img src={item.pictureUrl} alt="" />
                                            </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="font-bold text-sm">{item.name}</span>
                                                    <span className="text-red-500 text-xs">{item.type}</span>
                                                    <button onClick={() => {removeFromCart(); forceUpdate()}} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-1/5">
                                                <span className="mx-2 border text-center w-8"> 1 </span>
                                            </div>
                                            <span className="text-center w-1/5 font-semibold text-sm">$ {item.price}</span>
                                        </div>
                                        ))}
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {state.length}</span>
                            <span className="font-semibold text-sm">$ {totalPrice}</span>
                        </div>
                        <div className="border-t mt-8">
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Cart