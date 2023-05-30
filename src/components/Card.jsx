import React from "react";
import { useDispatch, useSelector } from "react-redux"

const Card = ({imgUrl,price,title,drawerItems,setDrawerItems}) => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const [itemsCount, setItemsCount] = React.useState(0)

    function onAddToCart(){
        setDrawerItems([...drawerItems, {imgUrl, price, title}])
        dispatch({type: "ADD_CASH", payload: price})
        setItemsCount(itemsCount + 1) 
    }

    function deleteItems(){
        setItemsCount(0)
        dispatch({type: "DEL_CASH"})
        setDrawerItems(drawerItems.filter((obj) => title !== obj.title))
    }

    return(
        <div className="card">
        <div>
            <img src='/img/unliked.png' width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={imgUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{price}</b>
            </div>
            <div>
              <img className="button" onClick={() => onAddToCart()} width={32} height={32} src={itemsCount !== 0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />
              <img className={itemsCount ==0 ? "display-none" : "button"} onClick={() => deleteItems()} width={32} height={32} src={"/img/delete.png"} alt="Del" />
            </div>
        </div>
            <p>Количество товара:{itemsCount}</p>
        </div>
    )
}

export default Card;