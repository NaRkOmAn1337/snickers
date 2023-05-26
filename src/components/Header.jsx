import { Link } from "react-router-dom"

 
 function Header({setIsVisible, isVisible}){
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
                <span>1205 руб.</span>
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