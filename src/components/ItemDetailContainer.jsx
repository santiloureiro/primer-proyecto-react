import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const randomNumber = (ceil) => {
        let randomNumber = Math.round(Math.random()*ceil)
        return randomNumber
    }

    const [product, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { productoId } = useParams()

useEffect(() => {
    const productos = [
        {   id: 1,
            name: "Blueberry",
            type: "S",
            stock: 6,
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Blueberrysin_gbte2j.png",
            description: "Probaste los teclados 60%? Son ideales para llevar a donde quieras!"
        },
        {   id: 2,
            name: "Strawberry",
            type: "S",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/StrawBerrysin_ci4zo0.png",
            description: "Probaste los teclados 60%? Son ideales para llevar a donde quieras!"
        },
        {   id: 3,
            name: "Yellow",
            type: "S",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Yellowsin_vna33d.png",
            description: "Probaste los teclados 60%? Son ideales para llevar a donde quieras!"
        },
        {   id: 4,
            name: "OrangePeel",
            type: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/OrangePeel_Medium_lfcisa.png",
            description: "Nuestro TKL, perfecto para escritorios pequeños."
        },
        {   id: 5,
            name: "Oreo",
            type: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Oreo_Mediumsin_hov8av.png",
            description: "Nuestro TKL, perfecto para escritorios pequeños."
        },
        {   id: 6,
            name: "BlueSky",
            type: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/BlueSky_Medium_vmfmdr.png",
            description: "Nuestro TKL, perfecto para escritorios pequeños."
        },
        {   id: 7,
            name: "Bee",
            type: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Bee_Largesin_gjxcoc.png",
            description: "Para los que prefieren un teclado full-size."
        },
        {   id: 8,
            name: "WaterMelon",
            type: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/WaterMelon_Large_cbe1wz.png",
            description: "Para los que prefieren un teclado full-size."
        },
        {   id: 9,
            name: "NightLight",
            type: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/NightLight_Largesin_y2xb8l.png",
            description: "Para los que prefieren un teclado full-size."
        },
    ]
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            setProducts(productos)
            setLoading(false)
        }, 2000);
    })

    getProducts.then(res => setProducts(res.find(product => product.id === parseInt(productoId))))

}, [productoId])


    return(
        <div className="flex bg-zinc-200 justify-center">
            {loading ? (
                <div className="h-screen w-screen bg-white">
                <div className="flex justify-center items-center h-full">
                <img className="h-10 w-10" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="TecladoDescrip"></img>
                </div>
                </div>
                )
                :(
                <div className="flex justify-center items-center bg-zinc-200 h-[90vh] text-xl">
                <ItemDetail product={product} />
            </div>)}

        </div>
    )

}

export default ItemDetailContainer