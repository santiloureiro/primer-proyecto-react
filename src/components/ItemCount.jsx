
import { NavLink } from "react-router-dom"
import ItemCountInputs from "./ItemCountInputs"



const ItemCount = ({stock, initial, add1, minus1, noMore, stateVal, alert}) => {

console.log(add1)
    return(
        <div className="flex">
            <ItemCountInputs stock={stock}  stateVal={stateVal} add1={add1} minus1={minus1} noMore={noMore} alert={alert} initial={initial}/>
            <NavLink to={"/cart"}><button className="bg-white text-emerald-600 font-semibold text-sm px-5 rounded-sm mx-3 border-emerald-600 border transition-all hover:bg-emerald-600 hover:text-white">Add to Cart!</button></NavLink>
        </div>
    )
}

export default ItemCount