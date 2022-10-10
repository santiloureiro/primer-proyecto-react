/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import Contexts from "../contexts/Items";


export default function CartContext({children}) {
    
    const [cart, setCart] = useState([])

    return(
        <Contexts.cartContext.Provider value={{cart, setCart}}>
            {children}
        </Contexts.cartContext.Provider>
    )
}
