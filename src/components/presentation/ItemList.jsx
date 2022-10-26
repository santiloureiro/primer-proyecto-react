import Item from "./Item"



const ItemList = ({products}) => {

    return(
        <div className="grid place-content-center grid-cols-3">
            {products.map((item, i) => <Item key={i} data={item} />)}
        </div>
    )
}

export default ItemList