
import { NavLink } from "react-router-dom"


const Item = (props) => {

return(
        <div key={props.data.id} className="flex flex-col p-6 pb-0 mx-5 my-2 items-center text-base text-center bg-white rounded-lg border border-gray-200 shadow-md">
        <img src={props.data.pictureUrl} className="rounded-lg mb-4" alt="placeholder"></img>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.data.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.data.size}</p>
        <p className="mb-3 font-bold text-gray-700">$ {props.data.price}</p>
        <NavLink to={`/item/${props.data.id}`}><button className="bg-indigo-600 text-white font-semibold text-sm my-5 px-24 py-2 rounded-sm mx-3 border-indigo-600 border transition-all hover:bg-white hover:text-indigo-600">See More!</button></NavLink>
        </div>)
}

export default Item