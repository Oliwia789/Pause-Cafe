//Import des feuilles de style des composants du router
import "../styles/nav.css"
import "../styles/footer.css"

//Import des composants et du router react
import Nav from "./Nav"
import Footer from "./Footer"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ProductPage from "./ProductPage"
import Home from "./Home"
import Account from "./Account"

//Pour que chaque page route scroll au début de la page au chargement 
import ScrollToTop from "./ScrollToTop"

function App() {
    return (
        <Router>
            <ScrollToTop />
            <>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/produit">
                        <ProductPage/>
                    </Route>
                    <Route path="/inscription">
                        <Account/>
                    </Route>
                </Switch>
                <Footer/>
            </>
        </Router>
    )
}

export default App