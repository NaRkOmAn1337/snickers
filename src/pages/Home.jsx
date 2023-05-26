import Drawer from "../components/Drawer.jsx"
import App from "../App"
import Card from "../components/Card.jsx"
import Header from "../components/Header.jsx"

function Home({orderItems, setOrderItems,setIsVisible,isVisible,drawerItems, setDrawerItems,sneakersArr}){
    return (
    <>  
        <Header setIsVisible={setIsVisible} isVisible={isVisible} />
        <Drawer setDrawerItems={setDrawerItems} orderItems={orderItems} setOrderItems={setOrderItems} drawerItems={drawerItems} isVisible={isVisible} setIsVisible={setIsVisible} />
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" />
                <input placeholder="Поиск..." />
        </div>
            
            <div className="ds-f">
                {sneakersArr.map((elem, index) => <Card setDrawerItems={setDrawerItems} drawerItems = {drawerItems} title={elem.title} price={elem.price} imgUrl={elem.imageUrl} key={index}/>)}
            </div>

        </div>
    </>
    )
}

export default Home