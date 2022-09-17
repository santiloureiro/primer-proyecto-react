

const ItemListContainer = (props) => {

    return(
        <div className="flex justify-center my-11 w-screen">
            <div className="p-20 bg-zinc-800 rounded-xl text-white font-bold text-3xl">
                <p>{props.greeting} Usuario!</p>
            </div>
        </div>
    )
}

export default ItemListContainer