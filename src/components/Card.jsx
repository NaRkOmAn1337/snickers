import React from "react";

const Card = ({pImg,pPrice,pTitle,pDrawerItems,pSetDrawerItems}) => {

    const [itemsCount, setItemsCount] = React.useState(0)

    function onAddToCart(){
        pSetDrawerItems([...pDrawerItems, {pImg, pPrice, pTitle}])
        setItemsCount(itemsCount + 1) 
    }

    function deleteItems(){
        setItemsCount(0)
        pSetDrawerItems(pDrawerItems.filter((obj) => pTitle !== obj.pTitle))
    }

    return(
        <div className="card">
        <div>
            <img src='/img/unliked.png' width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={pImg} alt="Sneakers" />
        <h5>{pTitle}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{pPrice}</b>
            </div>
            <div>
              <img className="button" onClick={() => onAddToCart()} width={32} height={32} src={itemsCount !==0 ? "/img/btn-checked.svg" : "/img/plus.png"} alt="Plus" />
              <img className="button" onClick={() => deleteItems()} width={32} height={32} src={"/img/delete.png"} alt="Del" />
            </div>
        </div>
            <p>Количество товара:{itemsCount}</p>
        </div>
    )
}

export default Card;