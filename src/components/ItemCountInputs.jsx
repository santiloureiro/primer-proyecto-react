import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


const ItemCountInputs = ({ stock, initial }) => {

    const [count, setCount] = useState(initial);

    const [alerta, setAlerta] = useState(false)

    const add1ToCount = () => {
        if (count !== stock) setCount(count + 1)
    }

    const remove1ToCount = () => {
        if (count !== 0) { setCount(count - 1) }
    }

    const noMoreStock = () => {
        if (count === stock - 1) setAlerta(true)
        else setAlerta(false)
    }

    return (
        <div className="flex text-white h-fit border border-slate-200 w-fit rounded-sm">
            <button className="text-2xl text-indigo-600 rounded-l-sm w-8 transition-all hover:bg-indigo-600 hover:text-white" onClick={() => { remove1ToCount(); noMoreStock(); }}><FontAwesomeIcon className="w-3" icon={faMinus} /></button>
            <span className="text-black m-auto font-bold text-sm text-center w-32">{count}</span>
            <button className="text-2xl text-indigo-600 rounded-r-sm w-8 transition-all hover:bg-indigo-600 hover:text-white" onClick={() => { add1ToCount(); noMoreStock(); }}><FontAwesomeIcon className="w-3" icon={faPlus} /></button>
            {alerta ? (

                <div id="toast-danger" class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-slate-200 absolute bottom-0 right-0 transition-all" role="alert">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-600 dark:text-red-200">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Error icon</span>
                    </div>
                    <div class="ml-3 text-sm font-normal">No hay mas Stock!</div>
                </div>) : <></>}

        </div>
    )
}

export default ItemCountInputs