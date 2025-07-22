import "./FarmSection.scss"
import CarrotImage from "@assets/images/decorative/carrot.webp"
import CarrotBlurredImage from "@assets/images/decorative/carrot-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function FarmSection() {
    return (
        <section className="farm">
            <div className="farm__inner container">
                <div className="farm__row row">
                    <div className="farm__column column">
                        <h2 className="farm__title h2">About The Farm:</h2>

                        <p className="farm__description text">Our farm is dedicated to sustainable and organic practices that prioritize soil health, biodiversity, and clean, natural produce. We focus on transparency, working closely with the land to grow crops that are both nourishing and eco-friendly.</p>

                        <p className="farm__description text">Over the years, we’ve adopted modern farming techniques that align with traditional wisdom, helping us maintain the quality and integrity of every harvest.</p>

                        <LazyLoadImage
                            src={CarrotImage}
                            alt="Carrot from the farm"
                            className="farm__image"
                            width={936}
                            height={426}
                            effect="blur"
                            placeholderSrc={CarrotBlurredImage}
                        />

                        <span className="farm__image-title text">The Organic Products</span>

                        <h2 className="farm__title h2">How To Farm:</h2>

                        <p className="farm__description text">We believe farming is a balance between nature and care. Our process starts with healthy, chemical-free soil and continues with mindful cultivation techniques that avoid harmful pesticides or GMOs.</p>

                        <p className="farm__description text">From planting to harvest, each step is handled with attention to sustainability, ensuring that every crop supports the environment and your well-being.</p>

                        <h2 className="farm__title farm__title--last h2">Conclusion:</h2>

                        <p className="farm__description text">Farming organically isn’t just a method—it’s a commitment to better food and a better planet. By choosing natural solutions and working in harmony with the land, we create products that are cleaner, safer, and more flavorful.</p>

                        <p className="farm__description text">As we grow, we continue to improve our methods while staying rooted in the core values of quality, responsibility, and sustainability.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FarmSection