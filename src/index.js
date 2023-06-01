import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Redux, { createStore } from "redux"
import { Provider } from 'react-redux';


const defaultState = {
    cash: 0,
    inputValue: "",
    favorite: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "ADD_CASH":
            return{...state, cash: state.cash + action.payload}
        case "DEL_CASH":
            return{...state, cash: 0}
        case "CHANGE_INPUT":
            return{...state, inputValue: state.inputValue = (action.payload)}
        case "CLEAR-INPUT":
            return{...state, inputValue: ""}
        case "FAVORITE":
            return{...state, favorite: [...state.favorite, action.payload]}
        default:
            return state
    }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App /> 
        </Provider> 
    </BrowserRouter>   
);
