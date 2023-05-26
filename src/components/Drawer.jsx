
import React from "react"


function Drawer ({drawerItems,setDrawerItems,orderItems, setOrderItems, isVisible,setIsVisible}){
    const [isOrdered, setIsOrdered] = React.useState(false)

    function makeOrder(drawerItems){
        setOrderItems([...orderItems, drawerItems])
        setDrawerItems([])
        setIsOrdered(!isOrdered)
    }
    return(
        <div style = {isVisible ? {display: "block"} : {display: "none"}}  className="overlay">
        <div className="drawer">
          <h2>
            Корзина <img onClick={() => setIsVisible(!isVisible)} className="cu-p" src="./img/btn-remove.png" alt="Remove" />
          </h2>

          {isOrdered && <div
          style={{position: 'absolute', top: '330px', right: '100px'}}>
            <img src="/img/complete-order.jpg" alt="Заказ оформлен" />
            <h2>Заказ оформлен</h2>
            </div>}
          
    
          <div className="items">           
              {
                drawerItems.map((obj, index) =>
                <div key = {index} className="cartItem">
                <div
                  style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className="cartItemImg">
                </div>
    
                <div className="cartText">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
                </div>
               <img className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
               </div>
                )
              }
              
          </div>
    
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton" onClick={() => makeOrder(drawerItems)}>
              Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    )
}

export default Drawer;