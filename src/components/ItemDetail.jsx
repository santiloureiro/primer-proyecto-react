import ItemCount from "./ItemCount"


const ItemDetail = (props) => {
    console.log(props.product)

    return (
        <div className="flex bg-white">
            <div class="container px-5 py-5 rounded-r-2xl mx-auto">
                <div class="mx-auto flex flex-wrap items-center justify-center">
                    <img alt="keyboard" class="w-8/12 h-full rounded border border-gray-200" src={props.product.pictureUrl} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-center text-gray-500 tracking-widest">{props.product.type}</h2>
                            <h1 class="text-gray-900 text-3xl title-font text-center font-medium mb-1">{props.product.name}</h1>
                            <div class="flex mb-4">
                            </div>
                            <p class="leading-relaxed text-center">{props.product.description}</p>
                            <div class="flex flex-col justify-center items-center mt-5">
                                <span class="title-font mb-5 font-medium text-2xl text-gray-900">${props.product.price}</span>
                                <ItemCount stock={props.product.stock} initial={0} />
                                <span className="bg-black mt-6 px-20 font-medium rounded-lg text-white">Stock: {props.product.stock}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail