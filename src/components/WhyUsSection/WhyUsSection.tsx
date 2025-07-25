import React from "react"
import "./WhyUsSection.scss"
import GreenVegetablesImage from "@assets/images/decorative/green-vegetables.webp"
import GreenVegetablesBlurredImage from "@assets/images/decorative/green-vegetables-blurred.webp"
import ReturnPolicyIcon from "@assets/icons/return-policy.svg"
import FreshIcon from "@assets/icons/fresh.svg"
import SupportIcon from "@assets/icons/support.svg"
import PaymentIcon from "@assets/icons/payment.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import WhyUsSVGDecoration from "./WhyUsSVGDecoration"

type WhyUsFeature = {
    imageURL: string
    alt: string
    title: string
    description: string
}

type WhyUsDescriptionListItem = {
    term: string,
    definition: string
}

function WhyUsSection() {
    const features: WhyUsFeature[] = [
        {
            imageURL: ReturnPolicyIcon,
            alt: "Return Policy",
            title: "Return Policy",
            description: "We offer hassle-free returns to ensure your complete satisfaction with every purchase.",
        },
        {
            imageURL: FreshIcon,
            alt: "Fresh",
            title: "100% Fresh",
            description: "We carefully select and deliver fresh organic products to ensure the highest quality.",
        },
        {
            imageURL: SupportIcon,
            alt: "Support",
            title: "Support 24/7",
            description: "Our customer service team is available around the clock to assist you with any questions.",
        },
        {
            imageURL: PaymentIcon,
            alt: "Payment",
            title: "Secured Payment",
            description: "All transactions are protected with advanced security measures for your peace of mind.",
        },
    ]

    const descriptionList: WhyUsDescriptionListItem[] = [
        { term: "100% Natural Product", definition: "Our Biona Organic Granola with Wild Berries boosts immunity and keeps you energized." },
        { term: "Increases resistance", definition: "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing." }
    ]

    return (
        <section className="whyus">
            <div className="whyus__inner container">
                <div className="whyus__row whyus__row--1 row">
                    <div className="whyus__column whyus__column--1 column">
                        <span className="whyus__promo promo">Why Choose us?</span>

                        <h2 className="whyus__title h2">We do not buy from the
                            open market & traders.</h2>

                        <p className="whyus__description text">Our products never pass through middlemen or open markets, guaranteeing top quality for you.</p>

                        <dl className="whyus__description-list">
                            {descriptionList.map((listItem, index) => (
                                <React.Fragment key={index}>
                                    <dt className="whyus__description-term">
                                        <WhyUsSVGDecoration />

                                        {listItem.term}
                                    </dt>
                                    <dd className="whyus__description-definition text">{listItem.definition}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>

                    <div className="whyus__column whyus__column--2 column">
                        <LazyLoadImage
                            src={GreenVegetablesImage}
                            alt="Green vegetables and fruits"
                            className="whyus__image"
                            effect="blur"
                            placeholderSrc={GreenVegetablesBlurredImage}
                        />
                    </div>
                </div>

                <div className="whyus__row whyus__row--2 row">
                    <div className="whyus__column whyus__column--3 column">
                        <ul className="whyus__features-list">
                            {features.map((feature, index) => (
                                <li className="whyus__feature-list-item" key={index}>
                                    <div className="whyus__feature feature">
                                        <div className="feature__icon-wrap">
                                            <img
                                                className="feature__icon"
                                                src={feature.imageURL}
                                                alt={feature.alt}
                                                loading="lazy"
                                            />
                                        </div>

                                        <h6 className="feature__title h6">{feature.title}</h6>

                                        <p className="feature__description text">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection