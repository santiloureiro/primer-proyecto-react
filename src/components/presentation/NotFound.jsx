import { NavLink } from "react-router-dom"
import surprisedPikachu from "../../resources/surprised-pikachu.gif"

const NotFound = () => {

    return(
        <div className="flex flex-col h-[90vh] justify-center items-center">
            <div className="bg-white text-center p-6 rounded-2xl">
            <h1 className="text-3xl font-bold">Ups...</h1>
            <p className="text-xl my-5 font-semibold">Pagina no encontrada!</p>
            <img className="w-fit h-30 rounded-2xl" src={surprisedPikachu} alt="a surprised pikachu"></img>
            </div>
        </div>
    )
}


export default NotFound