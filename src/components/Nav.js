import logo from "../assets/logo_black.png"
import cart from "../assets/shopping-cart.png"
import user from "../assets/user.png"
import cross from "../assets/cross.png"
import React from "react"
import { Link } from 'react-router-dom'

function Nav() {

    //Use state pour afficher puis retirer le slider de connexion et de creation de compte

    const [login, setLogin] =  React.useState(false)

    function getLoginPart() {
        setLogin(true)
    }

    function closeLoginPart() {
        setLogin(false)
    }


    return (
        <nav>
            <div className="logo_part">
                <Link to="/Pause-Cafe" className="logo_link"><img src={logo} className="logo" alt="logo pause café"/></Link>
                <a href="#nos_cafes" className="nav_anchor">Nos cafés</a>
                <a href="#la_marque" className="nav_anchor">La marque</a>
            </div>
            <div className="user_part">
                <img className="user" src={user} alt="logo utilisateur" onClick={getLoginPart}/>
                <img className="cart" src={cart} alt="logo panier"/>
            </div>
            {
                login &&
                
                
                <div className="login_section">
                    <div className="login_part_first">
                        <img onClick={closeLoginPart} src={cross} className="cross_login" alt="logo croix"/>
                        <span>Compte client</span>
                    </div>
                    <form>
                        <span>Email</span>
                        <input type="text" placeholder="mon@email.fr" autoComplete="off"/>
                        <span>Mot de passe</span>
                        <input type="password" placeholder="mon mot de passe" autoComplete="off"/>
                        <div>Mot de passe oublié ?</div>
                        <button>Connexion</button>
                    </form>
                    <Link to="/inscription" className="create_account">Crée mon compte client</Link>
                </div>
            }
        </nav>

    )
}

export default Nav