
import ItemCountInputs from "./ItemCountInputs"



const ItemCount = ({item, cartAdd, initial, add1, minus1, noMore, stateVal, alert}) => {

    return(
        <div className="flex">
            <ItemCountInputs item={item} stateVal={stateVal} add1={add1} minus1={minus1} noMore={noMore} alert={alert} initial={initial}/>
            <button onClick={cartAdd} className="bg-white text-emerald-600 font-semibold text-sm px-5 rounded-sm mx-3 border-emerald-600 border transition-all hover:bg-emerald-600 hover:text-white">Add to Cart!</button>
        </div>
    )
}

export default ItemCount