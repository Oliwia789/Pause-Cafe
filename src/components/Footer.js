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
                    <li><a href="#">La marque</a></li>
                    <li><a href="#">Nos cafés</a></li>
                    <li><a href="#">Abonnez-vous</a></li>
                </ul>
                <div>
                    <a href="#" className="social"><img src={insta} alt="logo instagram"/></a>
                    <a href="#" className="social"><img src={twitter} alt="logo twitter"/></a>
                    <a href="#" className="social"><img src={facebook} alt="logo facebook"/></a>
                </div>
            </div>
            <hr/>
            <div className="footer_others">
                <div>
                    <a href="#">CGV</a>
                    <a href="#" className="help">Aide</a>
                </div>
                <div>
                    {
                        payement.map(element => <img key={element} src={element} alt="logo moyen de paiement"/>)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer 