import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Card from "../components/Card";

function Orders({drawerItems, setIsVisible, isVisible, orderItems, setOrderItems}){
    return(
        <>
            <Header setIsVisible={setIsVisible} 
          isVisible={isVisible} />
            <Drawer drawerItems={drawerItems} setIsVisible={setIsVisible} 
          isVisible={isVisible} />

          <div className="Content">
            <div className="ds-f">
                {orderItems.map((elem, index) => <Card drawerItems={drawerItems} title={elem.title} price={elem.price} imgUrl={elem.imageUrl} setOrderItems={setOrderItems} key={index}/>)}
            </div>
          </div>
        </>
    )  
}

export default Orders