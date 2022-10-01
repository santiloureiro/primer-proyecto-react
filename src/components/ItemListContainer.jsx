import { useEffect, useState } from "react"
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
            name: "Blueberry",
            description: "TecladoDescrip",
            stock: 6,
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Blueberrysin_gbte2j.png"
        },
        {   id: randomNumber(10000),
            name: "Strawberry",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/StrawBerrysin_ci4zo0.png"
        },
        {   id: randomNumber(10000),
            name: "Yellow",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Yellowsin_vna33d.png"
        },
        {   id: randomNumber(10000),
            name: "OrangePeel",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/OrangePeel_Medium_lfcisa.png"
        },
        {   id: randomNumber(10000),
            name: "Oreo",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Oreo_Mediumsin_hov8av.png"
        },
        {   id: randomNumber(10000),
            name: "BlueSky",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/BlueSky_Medium_vmfmdr.png"
        },
        {   id: randomNumber(10000),
            name: "Bee",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Bee_Largesin_gjxcoc.png"
        },
        {   id: randomNumber(10000),
            name: "WaterMelon",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/WaterMelon_Large_cbe1wz.png"
        },
        {   id: randomNumber(10000),
            name: "NightLight",
            description: "TecladoDescrip",
            stock: randomNumber(100),
            price: 0,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/NightLight_Largesin_y2xb8l.png"
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
        <div className="flex justify-center">
            {loading ? (
                <div className="h-96 bg-white">
                <div className="flex justify-center items-center h-full">
                <img className="h-10 w-10" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="TecladoDescrip"></img>
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