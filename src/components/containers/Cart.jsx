/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import Contexts from "../../contexts/Items"
import { NavLink } from "react-router-dom"
import {addDoc, doc, getFirestore, updateDoc, collection} from "firebase/firestore"


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
    
    const [empty, setEmpty] = useState(true)

    const removeFromCart = (i) => {
        contexto.cart.splice(i, 1)
        setState(contexto.cart)
        if(state.length === 0){setEmpty(true)}
    }

    const totalPrice = getTotalPrice()

    useEffect(() => {
        if(state.length === 0){
            setEmpty(true)
        }else{
            setEmpty(false)
        }
    }, [state])

    const buyer = {
        name: "Santi",
        phone: "1123308584",
        email: "santiloureiro12@gmail.com"
    }

    const [showBuyer, setShow] = useState(false)


    const purchaseComplete = () => {
        if(!showBuyer){
            setShow(true)
            console.log("Mostrar");
        }else{
            setShow(false)
            console.log("No Mostrar");
        }
    }

    const sendOrder = () => {
        const order = {
            buyer: buyer,
            items: state,
            total: totalPrice
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order)
    }

    const updateOrder = () => {

        const db = getFirestore();

        const orderDoc = doc(db, "orders", "key");

        updateDoc(orderDoc)

    }



    return (

        <div className="px-20 h-[95vh] py-5">
            {empty ? (<div className="flex flex-col bg-white w-fit mx-auto justify-center items-center my-10 rounded-lg">
                <h1 className="font-extrabold p-5 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">El carrito esta vacio!</h1>
                <NavLink to={"/products"}><button className="bg-gradient-to-r from-purple-400 to-pink-600 font-semibold rounded-lg p-3 hover:p-4 my-3 text-sm text-white uppercase w-full transition-all">Ir a productos!</button></NavLink>
                </div>) :
                (<div className="mx-auto flex flex-col flex-wrap items-center justify-center">
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
                                            <button onClick={() => { removeFromCart(i); forceUpdate() }} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <span className="mx-2 border text-center w-8"> 1 </span>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">$ {item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div id="summary" className="bg-white w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {state.length}</span>
                                <span className="font-semibold text-sm">$ {totalPrice}</span>
                            </div>
                            <div className="border-t mt-8">
                                <button onClick={() => {purchaseComplete()}} className="bg-emerald-500 font-semibold hover:bg-emerald-600 py-3 text-sm text-white uppercase w-full">Checkout</button>{
                                    showBuyer ? (<div className="absolute inset-0 p-10 bg-zinc-900">
                                        <div className="flex flex-col items-center text-white p-5 bg-zinc-900">
                                            <h1 className="font-bold">Tu resumen de la compra:</h1>
                                            <ul className="my-3"><label className="font-bold">Tus Datos</label>
                                                <li><span className="font-bold">Nombre:</span> {buyer.name}</li>
                                                <li><span className="font-bold">Telefono:</span> {buyer.phone}</li>
                                                <li><span className="font-bold">E-Mail: </span> {buyer.email}</li>
                                            </ul>

                                            <div className="my-3">
                                            {state.map((prod) =>  {return(
                                                <div className="my-2">
                                                <h5 className="font-bold">Item: {prod.id}</h5>
                                                <p><span className="font-bold">Item: </span> {prod.name}</p>
                                                <p><span className="font-bold">Tipo: </span>{prod.type}</p>
                                                <p><span className="font-bold">Precio: </span>$ {prod.price}.00</p>
                                                </div>
                                                )})}
                                            </div>
                                        <div>
                                            <button onClick={() => {sendOrder(); purchaseComplete()}} className="bg-green-600 font-semibold hover:bg-green-700 py-3 m-3 rounded-2xl text-sm text-white uppercase px-20">Terminar Compra!</button>
                                            <button onClick={purchaseComplete} className="bg-red-600 font-semibold hover:bg-red-800 py-3 m-3 rounded-2xl text-sm text-white uppercase px-20">Cerrar</button>
                                        </div>
                                        </div>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>)}
    </div>


    )
}

export default Cart