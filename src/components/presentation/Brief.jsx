



const Brief = ({state, removeFromCart, forceUpdate, totalPrice, buyer, showBuyer, purchaseComplete, sendOrder, name, email, phone, setEmail, setName, setPhone}) => {

return(
    <div className="mx-auto flex flex-col flex-wrap items-center justify-center">
        <div className="flex shadow-md w-[90vw] my-10">
            <div className="w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">{state.length} Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                </div>
                {state.map((item, i) => (
                    <div key={i} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img src={item.product.pictureUrl} alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">{item.product.name}</span>
                                <span className="text-red-500 text-xs">{item.product.size}</span>
                                <button onClick={() => { removeFromCart(i); forceUpdate() }} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <span className="mx-2 border text-center w-8"> {item.quantity || 1} </span>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$ {item.product.price * item.quantity}</span>
                    </div>
                ))}
            </div>
            <div id="summary" className="bg-white w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">Items {state.length}</span>
                    <span className="font-semibold text-sm">$ {totalPrice}</span>
                </div>
                <div className="flex flex-col align-middle justify-center">
                <label className="my-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input onChange={e => {setName(e.target.value)}} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="Pepito" required></input>
                <label className="my-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                    <input onChange={e => {setEmail(e.target.value)}} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="123-456-789" required></input>
                <label className="my-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
                    <input onChange={e => {setPhone(e.target.value)}} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="comprador@compramail.com" required></input>
                </div>
                <div className="border-t mt-8">
                    <button onClick={() => { sendOrder() }} className="bg-emerald-500 font-semibold hover:bg-emerald-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>)
}


export default Brief