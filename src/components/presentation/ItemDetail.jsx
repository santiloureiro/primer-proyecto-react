import { useState } from "react";
import ItemCount from "./ItemCount"


const ItemDetail = (props) => {

    const [count, setCount] = useState(0);


    const [alerta, setAlerta] = useState(false)

    const add1ToCount = () => {
        if (count !== props.product.stock) setCount(count + 1)
    }

    const remove1ToCount = () => {
        if (count !== 0) { setCount(count - 1) }
    }

    const noMoreStock = () => {
        if (count === props.product.stock) setAlerta(true)
        else setAlerta(false)
    }

    // {props.context.cart}

    return (
        <div className="flex bg-white">
            <div className="container px-5 py-5 rounded-r-2xl mx-auto">
                <div className="mx-auto flex flex-wrap items-center justify-center">
                    <img alt="keyboard" className="w-8/12 h-full rounded border border-gray-200" src={props.product.pictureUrl} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-center text-gray-500 tracking-widest">{props.product.type}</h2>
                            <h1 className="text-gray-900 text-3xl title-font text-center font-medium mb-1">{props.product.name}</h1>
                            <div className="flex mb-4">
                            </div>
                            <p className="leading-relaxed text-center">{props.product.description}</p>
                            <div className="flex flex-col justify-center items-center mt-5">
                                <span className="title-font mb-5 font-medium text-2xl text-gray-900">${props.product.price}</span>
                                <ItemCount cartAdd={() => {props.cartAdd(count)}} item={props.product} add1={add1ToCount} minus1={remove1ToCount} noMore={noMoreStock} stateVal={count} alert={alerta} initial={0} />
                                <span className="bg-black mt-6 px-20 font-medium rounded-lg text-white">Stock: {props.product.stock}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail