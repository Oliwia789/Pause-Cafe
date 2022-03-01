
function Products(props) {

    return (
        <div className="card_products">
            <img src={props.img} alt="image produit" className="img_products"/>
            {
                props.special &&
                <div className="banner_products">{props.special}</div>
            }
            <span className="origin_products">{props.origin}</span>
            <h3 className="name_products">{props.name}</h3>
            <span className="price_products">{"€" + props.price + ".00"}</span>
            <button className="info_products">En savoir plus</button>
        </div>
    )
}

export default Products