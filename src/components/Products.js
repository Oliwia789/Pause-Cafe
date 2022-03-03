import React from "react"
import { Link } from 'react-router-dom'

//Ce composant représente chaque card produit ajoutée avec les props pour chaque information

function Products(props) {

    //Avec le use state le bouton qui mène vers la page produit est display ou non en hover du conteneur

    const [showBtn, setShowBtn] = React.useState(false)

    return (
        <div className="card_products" onMouseOver={() => {setShowBtn(true)}} onMouseOut={() => {setShowBtn(false)}}>
            <img src={props.img} className="img_products" alt="produit"/>
            {
                props.special &&
                <div className="banner_products">{props.special}</div>
            }
            <span className="origin_products">{props.origin}</span>
            <h3 className="name_products">{props.name}</h3>
            <span className="price_products">{"€" + props.price + ".00"}</span>
            <Link to="/produit" style={showBtn ? {display: "block"} : {display: "none"}}><button className="info_products">En savoir plus</button></Link>
        </div>
    )
}

export default Products