import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../presentation/ItemList"


const ItemListContainer = () => {

    const randomNumber = (ceil) => {
        let randomNumber = Math.round(Math.random()*ceil)
        return randomNumber
    }

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

useEffect(() => {
    const productos = [
        {   id: 1,
            name: "Blueberry",
            description: "S",
            stock: 6,
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Blueberrysin_gbte2j.png"
        },
        {   id: 2,
            name: "Strawberry",
            description: "S",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/StrawBerrysin_ci4zo0.png"
        },
        {   id: 3,
            name: "Yellow",
            description: "S",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Yellowsin_vna33d.png"
        },
        {   id: 4,
            name: "OrangePeel",
            description: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/OrangePeel_Medium_lfcisa.png"
        },
        {   id: 5,
            name: "Oreo",
            description: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284302/Oreo_Mediumsin_hov8av.png"
        },
        {   id: 6,
            name: "BlueSky",
            description: "M",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/BlueSky_Medium_vmfmdr.png"
        },
        {   id: 7,
            name: "Bee",
            description: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/Bee_Largesin_gjxcoc.png"
        },
        {   id: 8,
            name: "WaterMelon",
            description: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/WaterMelon_Large_cbe1wz.png"
        },
        {   id: 9,
            name: "NightLight",
            description: "L",
            stock: randomNumber(100),
            price: 200,
            pictureUrl: "https://res.cloudinary.com/djccefmjp/image/upload/v1654284301/NightLight_Largesin_y2xb8l.png"
        },
    ]
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            setProducts(productos)
            setLoading(false)
        }, 1000);
    })


    if(categoriaId){
        setLoading(true)
        getProducts.then((res) => setProducts(res.filter(keyboard => keyboard.description === categoriaId)))
    } else {
        getProducts.then((res) => setProducts(res))
    }

}, [categoriaId])




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
                <div className="p-20 bg-zinc-200 h-full text-xl">
                <ItemList products={products} />
            </div>)}

        </div>
    )
}

export default ItemListContainer