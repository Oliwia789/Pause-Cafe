// Importer les styles :
import "../styles/header.css"
import "../styles/description.css"
import "../styles/products.css"
import "../styles/brand.css"
import "../styles/producers.css"
import "../styles/sub.css"
import "../styles/insta.css"

// Importer les composants :
import Header from "./Header"
import Description from "./Description"
import data from "../Data/productsList"
import Products from "./Products"
import Brand from "./Brand"
import Producers from "./Producers"
import Subscription from "./Subscription"
import Instagram from "./Instagram"

function Home() {
    // myData permet de map dans les objets du fichier data, récupérer l'id en key de l'élément et
    // décomposition du reste des informations car les nom des props dans le composant Products sont
    // les mêmes que les clés dans le fichier data
    const myData = data.map(element => 
        <Products
        key = {element.id}
        {...element}
        />)

    return (
        <>
            <Header/>
            <Description/>
            <section className="section_products" id="nos_cafes">
                <h2 className="products_title">On fait une pause ?</h2>
                <p className="products_descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor natoque cursus purus sit suspendisse at mi senectus. </p>
                <div className="cards_products">
                {myData}
                </div>
            </section>
            <Brand/>
            <Producers/>
            <Subscription/>
            <Instagram/>
        </>
    )
}

export default Home