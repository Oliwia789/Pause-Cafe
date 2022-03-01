import insta_0 from "../assets/insta_0.jpg"
import insta_1 from "../assets/insta_1.jpg"
import insta_2 from "../assets/insta_2.jpg"
import insta_3 from "../assets/insta_3.jpg"
import insta_4 from "../assets/insta_4.jpg"
import insta_5 from "../assets/insta_5.jpg"
import insta_6 from "../assets/insta_6.jpg"
import insta_7 from "../assets/insta_7.jpg"

function Instagram() {

    let posts = [insta_0,insta_1,insta_2,insta_3, insta_4,insta_5, insta_6, insta_7]

    return (
        <section className="section_insta">
            <h2 className="title_insta">On se follow ?</h2>
            <div className="container_insta">
                {
                    posts.map(element => <img className="insta_img" src={element} alt=""photography compte instagram/>)
                }
            </div>
            <h2 className="title_last">Le meilleur de Pause Café directement chez vous</h2>
            <button>Nos Cafés</button>
        </section>
    )
}

export default Instagram