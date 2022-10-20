import Item from "./Item"



const ItemList = (props) => {


    return(
        <div className="grid place-content-center grid-cols-3">
            {props.products.map(item => <Item key={item.id} data={item} />)}
        </div>
    )
}

export default ItemList