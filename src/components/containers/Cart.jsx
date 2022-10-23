/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import Contexts from "../../contexts/Items"
import { NavLink } from "react-router-dom"
import {addDoc, doc, getFirestore, updateDoc, collection} from "firebase/firestore"
import Brief from "../presentation/Brief"


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
                (<Brief state={state} removeFromCart={removeFromCart} forceUpdate={forceUpdate} totalPrice={totalPrice} buyer={buyer} showBuyer={showBuyer} setShow={setShow} sendOrder={sendOrder} purchaseComplete={purchaseComplete} ></Brief>)}
    </div>


    )
}

export default Cart