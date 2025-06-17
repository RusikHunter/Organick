import "./OrganicSection.scss"
import ProductsWrap from "../ProductsWrap/ProductsWrap"
import { Link } from "react-router-dom"

function OrganicSection() {
    return (
        <section className="organic">
            <div className="organic__inner container">
                <div className="organic__row organic__row--1 row">
                    <div className="organic__column organic__column--1 column">
                        <span className="organic__promo promo">Offer</span>

                        <h2 className="organic__title h2">We Offer Organic For You</h2>
                    </div>

                    <div className="organic__column organic__column--2 column">
                        <Link to="/shop" className="organic__link" tabIndex={-1}>
                            <button className="organic__button organic__button--more button button--yellow">
                                View All Products

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="organic__row organic__row--2 row">
                    <div className="organic__column organic__column--3 column">
                        <ProductsWrap defaultCardsCount={4} hasButtonMore={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrganicSection