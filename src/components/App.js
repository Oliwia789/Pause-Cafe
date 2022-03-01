import Nav from "./Nav"
import Header from "./Header"
import Description from "./Description"
import data from "../Data/productsList"
import Products from "./Products"
import Brand from "./Brand"
import Producers from "./Producers"
import Subscription from "./Subscription"
import Instagram from "./Instagram"
import Footer from "./Footer"

function App() {
    const myData = data.map(element => 
        <Products
        key = {element.id}
        {...element}
        />)

    return (
        <>
           <Nav/>
           <Header/>
           <Description/>
           <section className="section_products">
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
           <Footer/>
        </>
    )
}

export default App