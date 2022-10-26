import ItemQuantitySelector from "./ItemQuantitySelector"


const ItemCount = ({item, cartAdd, add1, minus1, noMore, stateVal}) => {


    return(
        <div className="flex">
            <ItemQuantitySelector item={item} stateVal={stateVal} add1={add1} minus1={minus1} noMore={noMore}/>
            <button onClick={cartAdd} className="bg-white text-emerald-600 font-semibold text-sm px-5 rounded-sm mx-3 border-emerald-600 border transition-all hover:bg-emerald-600 hover:text-white">Add to Cart!</button>
        </div>
    )
}

export default ItemCount