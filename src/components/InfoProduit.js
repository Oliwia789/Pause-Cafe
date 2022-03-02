import arrow from "../assets/right-arrow.png"
import imagesProduits from "../Data/imagesProduits"
import React from "react"


function InfoProduit() {

    // Ajout d'un use state hook pour le carrousel d'images, les images viennes de la bases de données
    //crée dans le fichier imagesProduits pour facilite l'import des images. Le carrousel commence 
    //avec l'image à l'index 0
    const [currentImg, setCurrentImg] = React.useState(0)
    // Les images sont ajoutées en tant que background dans le container du carrousel
    const myStyle = {
        backgroundImage: `url(${imagesProduits[currentImg].image})`
    }

    //Ajout d'une useState hook pour ajouter et diminuer le nombre d'articles en cliquant sur le bouton
    //+ ou -
    const [currentNb, setCurrentNb] = React.useState(1)

    return (
        <section className="info_product">
            <div className="back_home">
                <a href="#">Accueil</a>
            </div>
            <div className="main_container">
                <div className="carousel_container">
                    <div className="carousel">
                        <div className="carousel_img" style={myStyle}></div>
                    </div>
                    <div className="arrows_container">
                        <img className="carousel_arrow left_arrow" src={arrow} alt="flèche droite" onClick={() => {currentImg > 0 && setCurrentImg(currentImg - 1)}}/>
                        <img className="carousel_arrow" src={arrow} alt="flèche gauche" onClick={() => {currentImg < imagesProduits.length -1 && setCurrentImg(currentImg + 1)}}/>
                    </div>
                </div>
                <div className="text_container">
                    <div className="info_container">
                        <span>Colombie</span>
                        <div>Best Seller</div>
                    </div>
                    <h1>Pause Colombienne</h1>
                    <span className="price">€22.00</span>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum neque nascetur orci, ultricies eget. Arcu non eget in scelerisque orci condimentum facilisis urna enim. Faucibus ultrices sit egestas velit sed feugiat.</p>
                    <span className="choice">Poids :</span>
                    <div className="choice_options">
                        <div>1 kg</div>
                        <div>250g</div>
                    </div>
                    <span className="choice">Mouture :</span>
                    <div className="choice_options">
                        <div>Grains</div>
                        <div>Fraîchement moulue</div>
                    </div>
                </div>
            </div>
            <div className="cart_container">
                <div className="products_nb">
                    <div onClick={() => setCurrentNb(currentNb > 1 ? currentNb - 1 : 1)}>-</div>
                    <div className="nb">{currentNb}</div>
                    <div onClick={() => setCurrentNb(currentNb + 1)}>+</div>
                </div>
                <button className="add_prod">Ajouter au panier</button>
            </div>
        </section>
    )
}

export default InfoProduit