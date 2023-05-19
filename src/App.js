import Card from "./components/Card.jsx";
import Drawer from "./components/Drawer.jsx";
import React from "react";


function App() {

  const [isVisible, setIsVisible] = React.useState(false)

  const [drawerItems, SetDrawerItems] = React.useState([])

  const sneakersArr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: './img/sneakers/1.png',
    },
    { 
      title: 'Мужские Кроссовки Nike Air Max 270', 
      price: 15600, 
      imageUrl: './img/sneakers/2.png' 
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: './img/sneakers/3.png',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: './img/sneakers/4.png',
    },
  ];
  


  return (
    <div className="wrapper">
    <header>
      <div>
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul>
        <li className="cursor" onClick={() => setIsVisible(!isVisible)}>
          <img width={18} height={18} src="/img/cart.png" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/fav.png" />
        </li>

        <li>
          <img width={18} height={18} src="/img/user.png" />
        </li>
      </ul>
    </header>
    <Drawer drawerItems={drawerItems} isVisible={isVisible} setIsVisible={setIsVisible} />
    <div className="content">
          <h1>Все кроссовки</h1>
          <div className="search-block">
              <img src="/img/search.png" width={18} height={18} alt="Search" />
              <input placeholder="Поиск..." />
          </div>
        
    <div className="ds-f">
         {sneakersArr.map((elem, index) => <Card pSetDrawerItems={SetDrawerItems} pDrawerItems = {drawerItems} pTitle={elem.title} pPrice={elem.price} pImg={elem.imageUrl} key={index}/>)}
    </div>

    </div>
  </div>
  );
}

export default App;
