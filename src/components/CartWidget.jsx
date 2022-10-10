import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

const CartWidget = () => {
    
    return(
        <div>
            <NavLink to={"/cart"}><div className="mx-2 mr-7 px-3 py-1 cursor-pointer bg-white rounded-lg transition-all hover:bg-emerald-400 hover:text-white"><FontAwesomeIcon icon={faCartShopping} /></div></NavLink>
        </div>
    )
}

export default CartWidget