import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../presentation/ItemList"
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore"


const ItemListContainer = () => {



    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

useEffect(() => {

    const db = getFirestore();

    const fetchAllProducts = async () => { 
        
        let arrayFetch = []

        //Compara los precios y los ordena de menor a mayor
        function compareProdsPrice( a, b ) {
            if ( a.price < b.price ){
            return -1;
            }
            if ( a.price > b.price ){
            return 1;
            }
            return 0;
        }

        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            arrayFetch.push(doc.data())
        })
        
        arrayFetch.sort( compareProdsPrice );
        return arrayFetch
    }

    const fetchCategory = async () => {

        const q = query(collection(db, "productos"), where("size", "==", categoriaId));
        let arrayFetch = []

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            arrayFetch.push(doc.data())
        });
        return arrayFetch
    }

    if(categoriaId){
        fetchCategory().then(res => {
            setProducts(res)
            setLoading(false)})
    } else {
        fetchAllProducts().then(res => {
            console.log(res)
            setProducts(res)
            setLoading(false)})
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