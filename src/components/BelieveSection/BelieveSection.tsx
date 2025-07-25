import "./BelieveSection.scss"
import AccreditedFarmersFruitsImage from "@assets/images/decorative/accredited-farmers-fruits.webp"
import AccreditedFarmersFruitsBlurredImage from "@assets/images/decorative/accredited-farmers-fruits-blurred.webp"
import OrganicFoodsImage from "@assets/icons/organic-foods.svg"
import QualityStandardsImage from "@assets/icons/quality-standards.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"
import { Routes } from "@config/routes"

type BelieveSectionFeatures = {
    imageURL: string
    alt: string
    title: string
    text: string
}

function BelieveSection() {
    const features: BelieveSectionFeatures[] = [
        {
            imageURL: OrganicFoodsImage,
            alt: "Organic Foods",
            title: "Organic Foods Only",
            text: "All our food is grown naturally..."
        },
        {
            imageURL: QualityStandardsImage,
            alt: "Quality Standards",
            title: "Quality Standards",
            text: "We follow strict quality guidelines..."
        }
    ]

    return (
        <section className="believe">
            <div className="believe__inner container">
                <div className="believe__row row">
                    <div className="believe__column believe__column--1 column">
                        <LazyLoadImage
                            src={AccreditedFarmersFruitsImage}
                            alt="Accredited farmers fruits"
                            className="believe__image"
                            width={790}
                            height={778}
                            effect="blur"
                            placeholderSrc={AccreditedFarmersFruitsBlurredImage}
                        />
                    </div>
                    <div className="believe__column believe__column--2 column">
                        <span className="believe__promo promo">About Us</span>
                        <h2 className="believe__title h2">We Believe in Working Accredited Farmers</h2>
                        <p className="believe__text text">We partner only with trusted and certified farmers to ensure every product meets high-quality and sustainability standards.</p>

                        {features.map((feature, index) => (
                            <div className="believe__feature-wrap" key={index}>
                                <img src={feature.imageURL} alt={feature.alt} className="believe__icon" width={101} height={101} loading="lazy" />
                                <div className="believe__feature-text-wrap">
                                    <h6 className="believe__feature-title h6">{feature.title}</h6>
                                    <p className="believe__feature-text text">{feature.text}</p>
                                </div>
                            </div>
                        ))}

                        <RouteLink color={RouteLinkColor.BLUE} path={Routes.SHOP} text={"Shop now"} className="believe__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BelieveSection