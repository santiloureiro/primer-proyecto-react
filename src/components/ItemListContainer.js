import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const randomNumber = (ceil) => {
        let randomNumber = Math.round(Math.random()*ceil)
        return randomNumber
    }

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

useEffect(() => {
    const productos = [
        {   id: randomNumber(10000),
            name: "Zapato",
            description: "Este es un zapato lokura",
            stock: 6,
            price: 0,
            pictureUrl: "https://picsum.photos/200",
        },
        {   id: randomNumber(10000),
            name: "Gorra",
            description: "Este es una gorra lokura",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://picsum.photos/200",
        },
        {   id: randomNumber(10000),
            name: "Remera",
            description: "Este es una remera lokura",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://picsum.photos/200",
        },
        {   id: randomNumber(10000),
            name: "Zapatilla",
            description: "Este es una zapatilla lokura",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://picsum.photos/200",
        },
    ]
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            setLoading(false)
        }, 2000);
    })
    .then((res) => setProducts(res))
}, [])



    return(
        <div className="flex justify-center my-11">
            {loading ? (
                <div className="h-96 bg-white">
                <div className="flex justify-center items-center h-full">
                <img className="h-10 w-10" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""></img>
                </div>
                </div>
                )
                :(
                <div className="p-20 rounded-xl text-xl">
                <ItemList products={products} />
            </div>)}

        </div>
    )
}

export default ItemListContainer