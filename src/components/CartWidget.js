import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    
    return(
        <div>
            <div className="mx-4 px-3 py-1 cursor-pointer bg-white rounded-lg transition-all hover:bg-emerald-400 hover:text-white"><FontAwesomeIcon icon={faCartShopping} /></div>
        </div>
    )
}

export default CartWidget