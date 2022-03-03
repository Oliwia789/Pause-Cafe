import visa from "../assets/visa.png"
import paypal from "../assets/paypal.png"
import amex from "../assets/amex.png"
import apple from "../assets/apple-pay.png"
import logo from "../assets/logo_black.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/instagram.png"

function Footer() {
    //tableau des images des moyens de payement pour utiliser map 
    let payement = [visa, paypal, amex, apple]
    return (
        <footer>
            <div className="footer_main">
                <img className="footer_logo" src={logo} alt="Logo de pause café"/>
                <div className="footer_contact">
                    <address>111 rue de Paris <br/> 95000 <br/>Cergy</address>
                    <a href="mailto: contact@pausecafe.fr" className="footer_email">contact@pausecafe.fr</a>
                    <a href="tel:+33158148715">01.58.14.87.15</a>
                </div>
                <ul className="footer_anchors">
                    <li><a href="#la_marque">La marque</a></li>
                    <li><a href="#nos_cafes">Nos cafés</a></li>
                    <li><a href="#sub">Abonnez-vous</a></li>
                </ul>
                <div className="social_container">
                    <div className="social"><img src={insta} alt="logo instagram"/></div>
                    <div className="social"><img src={twitter} alt="logo twitter"/></div>
                    <div className="social"><img src={facebook} alt="logo facebook"/></div>
                </div>
            </div>
            <hr/>
            <div className="footer_others">
                <div>
                    <span>CGV</span>
                    <span className="help">Aide</span>
                </div>
                <div className="payements">
                    {
                        payement.map(element => <img key={element} src={element} alt="logo moyen de paiement"/>)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer 