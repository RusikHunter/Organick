import "./OfferSection.scss"
import CurryImage from "@assets/images/decorative/curry.webp"
import CurryBlurredImage from "@assets/images/decorative/curry-blurred.webp"
import NutsImage from "@assets/images/decorative/nuts.webp"
import NutsBlurredImage from "@assets/images/decorative/nuts-blurred.webp"
import AppleImage from "@assets/images/decorative/apple.webp"
import AppleBlurredImage from "@assets/images/decorative/apple-blurred.webp"
import GingerImage from "@assets/images/decorative/ginger.webp"
import GingerBlurredImage from "@assets/images/decorative/ginger-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Link } from "react-router-dom"
import { Routes } from "@config/routes"
import type { RouteLinkObject } from "@entities/routeLinkObject"

function OfferSection() {
    const links: RouteLinkObject[] = [
        {
            path: Routes.SHOP,
            content: (
                <>
                    <LazyLoadImage
                        className="offer__product-image"
                        src={CurryImage}
                        alt="Curry"
                        effect="blur"
                        placeholderSrc={CurryBlurredImage}
                    />

                    <h6 className="offer__product-title h6">Spicy</h6>
                </>
            )
        },
        {
            path: Routes.SHOP,
            content: (
                <>
                    <LazyLoadImage
                        className="offer__product-image"
                        src={NutsImage}
                        alt="Nuts and Feesd"
                        effect="blur"
                        placeholderSrc={NutsBlurredImage}
                    />

                    <h6 className="offer__product-title h6">Nuts & Feesd</h6>
                </>
            )
        },
        {
            path: Routes.SHOP,
            content: (
                <>
                    <LazyLoadImage
                        className="offer__product-image"
                        src={AppleImage}
                        alt="Apple"
                        effect="blur"
                        placeholderSrc={AppleBlurredImage}
                    />

                    <h6 className="offer__product-title h6">Fruits</h6>
                </>
            )
        },
        {
            path: Routes.SHOP,
            content: (
                <>
                    <LazyLoadImage
                        className="offer__product-image"
                        src={GingerImage}
                        alt="Ginger"
                        effect="blur"
                        placeholderSrc={GingerBlurredImage}
                    />

                    <h6 className="offer__product-title h6">Vegetable</h6>
                </>
            )
        },
    ]

    return (
        <section className="offer">
            <div className="offer__inner container">
                <div className="offer__row row">
                    <div className="offer__column column">
                        <span className="offer__promo promo">About Us</span>

                        <h2 className="offer__title h2">What We Offer for You</h2>

                        <ul className="offer__list">
                            {links.map((link, index) => (
                                <li className="offer__list-item">
                                    <Link to={link.path} className="offer__product" key={index}>
                                        {link.content}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferSection