import React from "react";
import { Routes, Route, Link } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import Orders from "./pages/Orders.jsx"
import Form from "./pages/Form.jsx"
import NotFound from "./pages/NotFound.jsx"
import Favorite from "./pages/Favorite.jsx";


function App() {

  const [orderItems, setOrderItems] = React.useState([])
  const [isVisible, setIsVisible] = React.useState(false)
  const [drawerItems, setDrawerItems] = React.useState([])
  

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
          <Routes>
            <Route path="/" element={<Home orderItems={orderItems} 
            setOrderItems={setOrderItems} setIsVisible={setIsVisible} 
            isVisible={isVisible} drawerItems={drawerItems} 
            setDrawerItems={setDrawerItems} sneakersArr={sneakersArr} />}>
            </Route>
            <Route path="/orders" element={<Orders orderItems={orderItems} setOrderItems={setOrderItems} setIsVisible={setIsVisible} 
            isVisible={isVisible} drawerItems={drawerItems} />}>
              </Route>
            <Route path="/form" element={<Form />} />
            <Route
              path="*" 
              element={<NotFound />}
            ></Route>
            <Route
              path="/favorite"
              element={<Favorite />}
              ></Route>
          </Routes>
      </div>
  );
}

export default App;
