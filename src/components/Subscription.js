import sub from "../assets/abonnement.jpg"

function Subscription() {
    return (
        <section className="section_sub" id="sub">
            <h2 className="sub_title">Plus jamais de "café" dans votre liste de courses</h2>
            <div className="sub_img">
                <img src={sub} alt="photographie cafés"/>
            </div>
            <div className="sub_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet quam adipiscing nulla eu pellentesque integer scelerisque ultrices. Scelerisque dui venenatis, nunc varius vitae sed eget. Cursus auctor at ut at ut eget est. </p>
                <button>Je m'abonne</button>
            </div>
        </section>
    )
}

export default Subscription