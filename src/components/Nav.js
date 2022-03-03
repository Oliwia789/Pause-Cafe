import logo from "../assets/logo_black.png"
import cart from "../assets/shopping-cart.png"
import user from "../assets/user.png"
import cross from "../assets/cross.png"
import React from "react"

function Nav() {

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
                <img className="logo" src={logo} alt="logo pause café"/>
                <a href="#" className="nav_anchor">Nos cafés</a>
                <a href="#" className="nav_anchor">La marque</a>
            </div>
            <div className="user_part">
                <a><img className="user" src={user} alt="logo utilisateur" onClick={getLoginPart}/></a>
                <img className="cart" src={cart} alt="logo panier"/>
            </div>
            {
                login &&
                
                
                <div className="login_section">
                    <div className="login_part_first">
                        <img onClick={closeLoginPart} src={cross} className="cross_login"/>
                        <span>Compte client</span>
                    </div>
                    <form>
                        <span>Email</span>
                        <input type="text" placeholder="mon@email.fr"/>
                        <span>Mot de passe</span>
                        <input type="password" placeholder="mon mot de passe"/>
                        <a href="#">Mot de passe oublié ?</a>
                        <button>Connexion</button>
                    </form>
                    <a href="#" className="create_account">Crée mon compte client</a>
                </div>
            }
        </nav>

    )
}

export default Nav