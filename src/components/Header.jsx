import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

 
 function Header({setIsVisible, isVisible}){

    const dispatch = useDispatch()

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 1})
    }

    const cash = useSelector(state => state.cash)

    console.log(cash)

    return(
        <header>
            <Link className="link" to="/">
                <div>
                    <img width={40} height={40} src="../img/logo.png" />
                    <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul>
                <li className="cursor" onClick={() => setIsVisible(!isVisible)}>
                <img width={18} height={18} src="/img/cart.png" />
                <span>{cash}</span>
                </li>
                <li>
                <img width={18} height={18} src="/img/fav.png" />
                </li>
            <Link to="/orders">
                <li>
                <img width={18} height={18} src="/img/user.png" />
                </li>
            </Link>    
            </ul>
        </header>
    )
 }
 
 export default Header