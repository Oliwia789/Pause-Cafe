import producers from "../assets/producteurs.jpg"

function Producers() {
    return (
        <section className="section_prod">
            <div className="prod_img">
                <img src={producers} alt="photographie producteurs de café"/>
            </div>
            <div className="prod_text">
                <h2>Nos Producteurs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit proin ipsum sagittis mauris, diam. Sed egestas sagittis tellus arcu ut elementum enim. Quis id magnis tristique dolor vel justo dapibus. Pellentesque lacus ac eget cursus libero, dolor.</p>
            </div>
        </section>
    )
}

export default Producers