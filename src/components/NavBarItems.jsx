import logoNegro from "../resources/LOGO KT Negro.png"
import logoBlanco from "../resources/LOGO KT Blanco.png"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBarItems = () => {

    return(
        <div className="flex w-screen items-center justify-between">
            <div className="flex flex-row items-center mx-2 cursor-pointer">
                <NavLink to={"/"}><img src={logoNegro} alt="Logo" className="w-12 h-fit px-1 py-2 transition-all bg-white hover:bg-zinc-900"
                    onMouseOver={e => (e.currentTarget.src = logoBlanco)}
                    onMouseOut={e => (e.currentTarget.src = logoNegro)}/></NavLink>
            </div>
            <ul className="flex flex-row items-center">
                <li><NavLink to={"/home"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">Home</span></NavLink></li>
                <li><NavLink to={"/"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-semibold transition-all hover:bg-white hover:text-black">Products</span></NavLink></li>
                <li><NavLink to={"/category/S"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-medium transition-all hover:bg-white hover:text-black">Size: S</span></NavLink></li>
                <li><NavLink to={"/category/M"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-medium transition-all hover:bg-white hover:text-black">Size: M</span></NavLink></li>
                <li><NavLink to={"/category/L"}><span className="mx-2 px-3 py-1 rounded-lg text-white font-medium transition-all hover:bg-white hover:text-black">Size: L</span></NavLink></li>
                <li><CartWidget /></li>
            </ul>
        </div>
    )
}

export default NavBarItems