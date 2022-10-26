import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"


const ItemQuantitySelector = ({add1, minus1, noMore, stateVal}) => {
    
    return (
        <div className="flex text-white h-fit border border-slate-200 w-fit rounded-sm">
            <button className="text-2xl text-indigo-600 rounded-l-sm w-8 transition-all hover:bg-indigo-600 hover:text-white" onClick={() => { minus1(); noMore(); }}><FontAwesomeIcon className="w-3" icon={faMinus} /></button>
            <span className="text-black m-auto font-bold text-sm text-center w-32">{stateVal}</span>
            <button className="text-2xl text-indigo-600 rounded-r-sm w-8 transition-all hover:bg-indigo-600 hover:text-white" onClick={() => { add1(); noMore(); }}><FontAwesomeIcon className="w-3" icon={faPlus} /></button>
        </div>
    )
}

export default ItemQuantitySelector