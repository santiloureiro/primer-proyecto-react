/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import Contexts from "../../contexts/Items"
import { NavLink } from "react-router-dom"
import {addDoc, getFirestore, collection} from "firebase/firestore"
import Brief from "../presentation/Brief"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

const CartWidget = () => {

    const forceUpdate = useForceUpdate()

    const contexto = useContext(Contexts.cartContext)
    
    const [state, setState] = useState(contexto.cart)
    
    const [empty, setEmpty] = useState(true)
    
    const [name, setName] = useState("")
    
    const [email, setEmail] = useState("")
    
    const [phone, setPhone] = useState("")

    const getTotalPrice = () => {
        let price = 0
        contexto.cart.map((item) => (
            price += item.product.price * item.quantity))
        return price
    }

    const getTotalItems = () => {
        let totalItems = 0
        state.forEach(element => {
            totalItems = element.quantity + totalItems
        });
        return totalItems
    }


    const removeFromCart = (i) => {
        contexto.cart.splice(i, 1)
        setState(contexto.cart)
        if(state.length === 0){setEmpty(true)}
    }

    const totalPrice = getTotalPrice()

    const totalItems = getTotalItems()

    useEffect(() => {
        if(state.length === 0){
            setEmpty(true)
        }else{
            setEmpty(false)
        }
    }, [state])

    const buyer = {
        name: name,
        phone: phone,
        email: email
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
        if(buyer.name !== "" && buyer.phone !== "" && buyer.email !== ""){
        const order = {
            buyer: buyer,
            items: state,
            total: totalPrice

        }

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order)

        Swal.fire({
            title: 'Purchase Complete!',
            icon: 'success',
            confirmButtonText: 'Close',
            iconColor: "white",
            background: "#34D399",
            color: "white",
            confirmButtonColor: "#D33434"
            
        })
    } else{
        Swal.fire({
            title: 'Error!',
            text: `Missing data!`,
            icon: 'error',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: "red"
        })
    }
    }

    return (

        <div className="px-20 h-[95vh] py-5">
            {empty ? (<div className="flex flex-col bg-white w-fit mx-auto justify-center items-center my-10 rounded-lg">
                <h1 className="font-extrabold p-5 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">El carrito esta vacio!</h1>
                <NavLink to={"/products"}><button className="bg-gradient-to-r from-purple-400 to-pink-600 font-semibold rounded-lg p-3 hover:p-4 my-3 text-sm text-white uppercase w-full transition-all">Ir a productos!</button></NavLink>
                </div>) :
                (<Brief state={state} removeFromCart={removeFromCart} forceUpdate={forceUpdate} totalPrice={totalPrice} totalItems={totalItems} buyer={buyer} showBuyer={showBuyer} setShow={setShow} sendOrder={sendOrder} purchaseComplete={purchaseComplete} name={name} email={email} phone={phone} setEmail={setEmail} setName={setName} setPhone={setPhone} ></Brief>)}
    </div>


    )
}

export default CartWidget