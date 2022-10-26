import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contexts from "../../contexts/Items";
import ItemDetail from "../presentation/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    const [loading, setLoading] = useState(true)

    const [count, setCount] = useState(1);

    const { productoId } = useParams()

    const context = useContext(Contexts.cartContext)

useEffect(() => {

    const db = getFirestore();

    const fetchProducts = async () => { 
        
        const docRef = doc(db, "productos", productoId);
        const docSnap = await getDoc(docRef);

        return docSnap.data()
        
    }

    fetchProducts().then(product => {
        setProduct(product)
        setLoading(false)})

},[productoId])

    const handleCheckout = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-right',
            iconColor: "white",
            background: "#34D399",
            color: "white",
            customClass: {
            popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })

        context.setCart([...context.cart, {product: product, quantity: count}])

        Toast.fire({
            icon: 'success',
            title: `Added ${count}, ${product.name}`
        })
    }


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
                <ItemDetail product={product} counter={count} setCount={setCount} cartAdd={handleCheckout} />

            </div>)}

        </div>
    )

}

export default ItemDetailContainer