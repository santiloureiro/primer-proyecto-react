import Item from "./Item"



const ItemList = (props) => {



    return(
        <div className="flex">
            {props.products.map(item => <Item key={item.id} data={item} />)}
        </div>
    )
}

export default ItemList