
import Swal from "sweetalert2";
import AddItemButton from "./ItemCount";


const ItemDetail = (props) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        iconColor: "white",
        background: "#D33434",
        color: "white",
        customClass: {
        popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })

    const add1ToCount = () => {
        if (props.counter !== props.product.stock) props.setCount(props.counter + 1)
        console.log(props.counter, props.product.stock)
    }

    const remove1ToCount = () => {
        if (props.counter !== 0) {props.setCount(props.counter - 1) }
    }

    const noMoreStock = () => {
        if (props.counter === parseInt(props.product.stock)){
            Toast.fire({
                icon: 'warning',
                title: 'No hay mas stock!'
            })
            props.setCount(parseInt(props.product.stock - 1))
        } 
    }


    
    // {props.context.cart}

    return (
        <div className="flex bg-white">
            <div className="container px-5 py-5 rounded-r-2xl mx-auto">
                <div className="mx-auto flex flex-wrap items-center justify-center">
                    <img alt="keyboard" className="w-8/12 h-full rounded border border-gray-200" src={props.product.pictureUrl} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-center text-gray-500 tracking-widest">{props.product.type}</h2>
                            <h1 className="text-gray-900 text-3xl title-font text-center font-medium mb-1">{props.product.name}</h1>
                            <div className="flex mb-1">
                            </div>
                            <p className="leading-relaxed text-center">{props.product.size}</p>
                            <div className="flex flex-col justify-center items-center mt-2">
                                <span className="title-font mb-5 font-medium text-2xl text-gray-900">${props.product.price}</span>
                                <AddItemButton cartAdd={() => {props.cartAdd(props.counter)}} add1={add1ToCount} minus1={remove1ToCount} noMore={noMoreStock} stateVal={props.counter}/>
                                <span className="bg-black mt-6 px-20 font-medium rounded-lg text-white">Stock: {props.product.stock}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail