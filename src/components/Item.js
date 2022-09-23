import ItemCount from "./ItemCount"


const Item = (props) => {
console.log(props)
    return(
            <div key={props.data.id} className="flex flex-col p-6 pb-0 mx-5 my-2 text-base text-center bg-white rounded-lg border border-gray-200 shadow-md">
            <img src={props.data.pictureUrl} className="rounded-lg mb-4" alt="placeholder"></img>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.data.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.data.description}</p>
            <ItemCount stock={props.data.stock} initial={0} />
            <span className="bg-black mt-6 font-medium rounded-t-lg text-white">Stock: {props.data.stock}</span>
        </div>)
}

export default Item