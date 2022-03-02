import farmer from "../assets/farmer.png"
import heart from "../assets/heart.png"
import organic from "../assets/plant-based.png"
import shipped from "../assets/shipped.png"

//Partie description en iconographie des valeurs de la marque

function Description() {
    return (
        <section className="descr_section">
            <div className="descr_part">
                <img src={heart} alt="logo coeur" className="descr_img"/>
                <span className="descr_text">Torréfié avec amour</span>
            </div>
            <div className="descr_part">
                <img src={farmer} alt="logo producteur" className="descr_img"/>
                <span className="descr_text">Au plus près des producteurs</span>
            </div>
            <div className="descr_part">
                <img src={organic} alt="logo bio" className="descr_img"/>
                <span className="descr_text">Cafés issus de l’agriculture biologique</span>
            </div>
            <div className="descr_part">
                <img src={shipped} alt="logo livraison" className="descr_img"/>
                <span className="descr_text">Livré chez vous rapidement</span>
            </div>
        </section>
    )
}

export default Description