import logo from "../assets/logo_black.png"
import cart from "../assets/shopping-cart.png"
import user from "../assets/user.png"

function Nav() {

    return (
        <nav>
            <div className="logo_part">
                <img className="logo" src={logo} alt="logo pause café"/>
                <a href="#" className="nav_anchor">Nos cafés</a>
                <a href="#" className="nav_anchor">La marque</a>
            </div>
            <div className="user_part">
                <a><img className="user" src={user} alt="logo utilisateur"/></a>
                <img className="cart" src={cart} alt="logo panier"/>
            </div>
        </nav>

    )
}

export default Nav