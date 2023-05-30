import Drawer from "../components/Drawer.jsx"
import App from "../App"
import Card from "../components/Card.jsx"
import Header from "../components/Header.jsx"

import { useDispatch, useSelector } from "react-redux"
import { type } from "@testing-library/user-event/dist/type/index.js"

function Home({orderItems, setOrderItems,setIsVisible,isVisible,drawerItems, setDrawerItems,sneakersArr}){
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.inputValue)

    function onChangeInput(event){
        dispatch({type: "CHANGE_INPUT", payload: event.target.value})
    }

    return (
    <>  
        <Header setIsVisible={setIsVisible} isVisible={isVisible} />
        <Drawer setDrawerItems={setDrawerItems} orderItems={orderItems} setOrderItems={setOrderItems} drawerItems={drawerItems} isVisible={isVisible} setIsVisible={setIsVisible} />
        <div className="content">
            <h1>{inputValue ? `Поиск по: ${inputValue}` : `Все кроссовки`}</h1>
        <div className="search-block">
                <img className="search-img" src="/img/search.png" width={18} height={18} alt="Search" />
                <input value={inputValue} onChange={(event) => onChangeInput(event)} placeholder="Поиск..." />
                <img onClick={() => dispatch({type: "CLEAR-INPUT"})} className={inputValue ? "cross-img" : "display-none"} src="/img/btn-remove.png" width={26} height={26} alt="Cross" />
        </div>
            
            <div className="ds-f">
                {sneakersArr.filter((elem) => elem.title.toLowerCase().includes(inputValue.toLowerCase())) // Поиск по названию lowercase нижний регистр
                .map((elem, index) => <Card setDrawerItems={setDrawerItems} drawerItems = {drawerItems} title={elem.title} price={elem.price} imgUrl={elem.imageUrl} key={index}/>)}
            </div>

        </div>
    </>
    )
}

export default Home