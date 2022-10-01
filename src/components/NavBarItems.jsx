import logoNegro from "../resources/LOGO KT Negro.png"
import logoBlanco from "../resources/LOGO KT Blanco.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBarItems = () => {

    return(
        <div className="flex w-screen items-center justify-between">
            <div className="flex flex-row items-center mx-2 cursor-pointer">
                <img src={logoNegro} alt="Logo" className="w-12 h-fit px-1 py-2 transition-all bg-white hover:bg-zinc-900"
                    onMouseOver={e => (e.currentTarget.src = logoBlanco)}
                    onMouseOut={e => (e.currentTarget.src = logoNegro)}  />
            </div>
            <ul className="flex flex-row items-center">
                <li><Link to={"/"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">Home</span></Link></li>
                <li><Link to={"/ItemListContainer"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">Products</span></Link></li>
                <li><Link to={"/"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">Contact Us</span></Link></li>
                <li><Link to={"/"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">About</span></Link></li>
                <li><CartWidget /></li>
            </ul>
        </div>
    )
}

export default NavBarItems