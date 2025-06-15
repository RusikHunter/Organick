import "./FarmSection.scss"
import CarrotImage from "../../images/images/carrot.png"

function FarmSection() {
    return (
        <section className="farm">
            <div className="farm__inner container">
                <div className="farm__row row">
                    <div className="farm__column column">
                        <h2 className="farm__title h2">About The Farm:</h2>

                        <p className="farm__description text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                        <p className="farm__description text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

                        <img src={CarrotImage} alt="Carrot from the farm" className="farm__image" width={936} height={426} />

                        <span className="farm__image-title">The Organic Products</span>

                        <h2 className="farm__title h2">How To Farm:</h2>

                        <p className="farm__description text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                        <p className="farm__description text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

                        <h2 className="farm__title h2">Conclusion:</h2>

                        <p className="farm__description text">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                        <p className="farm__description text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FarmSection