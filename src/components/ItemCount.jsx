
import ItemCountInputs from "./ItemCountInputs"



const ItemCount = ({stock, initial}) => {


    return(
        <div className="flex">
            <ItemCountInputs stock={stock} initial={initial}/>
            <button className="bg-white text-emerald-600 font-semibold text-sm px-5 rounded-sm mx-3 border-emerald-600 border transition-all hover:bg-emerald-600 hover:text-white">Add to Cart!</button>
        </div>
    )
}

export default ItemCount