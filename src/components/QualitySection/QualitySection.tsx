import "./QualitySection.scss"
import ManInGardenImage from "@assets/images/decorative/man-in-garden.webp"
import ManInGardenBlurredImage from "@assets/images/decorative/man-in-garden-blurred.webp"
import PlantingImage from "@assets/images/decorative/planting.webp"
import PlantingBlurredImage from "@assets/images/decorative/planting-blurred.webp"
import PlantImage from "@assets/images/decorative/plant.webp"
import PlantBlurredImage from "@assets/images/decorative/plant-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type QualityFeature = {
    imageURL: string,
    blurredImageURL: string,
    alt: string,
    title: string,
    description: string
}

function QualitySection() {
    const features: QualityFeature[] = [
        {
            imageURL: PlantingImage,
            blurredImageURL: PlantingBlurredImage,
            alt: "Planting",
            title: "Why Organic",
            description: "Organic methods preserve soil fertility, reduce pollution, and avoid harmful pesticides. It’s a natural way to grow food that’s better for the planet and safer for your family."
        },
        {
            imageURL: PlantImage,
            blurredImageURL: PlantBlurredImage,
            alt: "Plant",
            title: "Speciality Produce",
            description: "Our produce includes rare and seasonal varieties grown with care. Each harvest is packed with flavor and nutrition—fresh from our fields to your table."
        },
    ]

    return (
        <section className="quality">
            <div className="quality__inner container">
                <div className="quality__row quality__row--1 row">
                    <div className="quality__column quality__column--1 column">
                        <LazyLoadImage
                            className="quality__image"
                            src={ManInGardenImage}
                            alt="Man in garden"
                            effect="blur"
                            placeholderSrc={ManInGardenBlurredImage}
                        />
                    </div>
                </div>

                <div className="quality__row quality__row--2 row">
                    <div className="quality__column quality__column--2 column">
                        <h2 className="quality__title h2">Organic Store Services</h2>

                        <p className="quality__description text">Organic farming is gaining global attention as people seek healthier, safer food. Our approach focuses on sustainability, soil health, and chemical-free cultivation to protect nature and nourish communities.</p>

                        <p className="quality__description text">Today, more producers adopt eco-friendly practices to meet rising demand. We offer high-quality organic goods that support well-being and help build a cleaner, greener future for everyone.</p>

                        <div className="quality__features">


                            {features.map((feature, index) => (
                                <div className="quality__feature" key={index}>
                                    <LazyLoadImage
                                        className="quality__feature-image"
                                        src={feature.imageURL}
                                        alt={feature.alt}
                                        effect="blur"
                                        placeholderSrc={feature.blurredImageURL}
                                    />

                                    <div className="quality__feature-content">
                                        <h6 className="quality__feature-title h6">{feature.title}</h6>

                                        <p className="quality__feature-description text">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 className="quality__subtitle h4">We farm your land</h4>

                        <p className="quality__description text">We partner with landowners to cultivate organic crops using proven techniques. Our team ensures every field is productive, eco-friendly, and aligned with sustainable farming goals.</p>

                        <div className="quality__advantages">
                            <span className="quality__advantage">
                                <span className="quality__advantage-circle h6">01</span>
                                <span className="quality__advantage-text h6">Best quality support</span>
                            </span>

                            <span className="quality__advantage">
                                <span className="quality__advantage-circle h6">02</span>
                                <span className="quality__advantage-text h6">Money back guarantee</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualitySection