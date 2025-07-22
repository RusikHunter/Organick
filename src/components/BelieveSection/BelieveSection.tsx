import { Link } from "react-router-dom"
import "./BelieveSection.scss"
import AccreditedFarmersFruitsImage from "@assets/images/decorative/accredited-farmers-fruits.webp"
import AccreditedFarmersFruitsBlurredImage from "@assets/images/decorative/accredited-farmers-fruits-blurred.webp"
import OrganicFoodsImage from "@assets/icons/organic-foods.svg"
import QualityStandardsImage from "@assets/icons/quality-standards.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

function BelieveSection() {
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

                        <div className="believe__feature-wrap">
                            <img
                                src={OrganicFoodsImage}
                                alt="Organic Foods"
                                className="believe__icon"
                                width={101}
                                height={101}
                                loading="lazy"
                            />
                            <div className="believe__feature-text-wrap">
                                <h6 className="believe__feature-title h6">Organic Foods Only</h6>
                                <p className="believe__feature-text text">All our food is grown naturally, free from harmful chemicals, supporting both your health and the environment.</p>
                            </div>
                        </div>

                        <div className="believe__feature-wrap">
                            <img
                                src={QualityStandardsImage}
                                alt="Organic Foods"
                                className="believe__icon"
                                width={101}
                                height={101}
                                loading="lazy"
                            />
                            <div className="believe__feature-text-wrap">
                                <h6 className="believe__feature-title h6">Quality Standards</h6>
                                <p className="believe__feature-text text">We follow strict quality guidelines and work with top producers to bring you fresh, organic, and responsibly sourced products.</p>
                            </div>
                        </div>

                        <Link to="/shop" className="believe__link" tabIndex={-1}>
                            <button className="believe__button button button--blue">
                                Shop now

                                <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.97641 6.12891L13.371 9.19342L9.97641 12.2579M12.8995 9.19342H6.01611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BelieveSection