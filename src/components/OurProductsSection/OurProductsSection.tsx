import "./OurProductsSection.scss"
import ProductsWrap from "@components/ProductsWrap/ProductsWrap"
import { Link } from "react-router-dom"

function OurProductsSection() {
    return (
        <section className="our-products">
            <div className="our-products__inner container">
                <div className="our-products__row our-products__row--1 row">
                    <div className="our-products__column our-products__column--1 column">
                        <span className="our-products__promo promo">Categories</span>

                        <h2 className="our-products__title h2">Our Products</h2>
                    </div>
                </div>

                <div className="our-products__row our-products__row--2 row">
                    <div className="our-products__column our-products__column--2 column">
                        <ProductsWrap defaultCardsCount={8} />
                    </div>
                </div>

                <div className="our-products__row our-products__row--3 row">
                    <div className="our-products__column our-products__column--3 column">
                        <Link to="/shop" className="our-products__link" tabIndex={-1}>
                            <button className="our-products__button our-products__button--more button button--blue">
                                Load More

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProductsSection