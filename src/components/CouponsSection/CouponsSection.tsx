import "./CouponsSection.scss"
import { Link } from "react-router-dom"

function CouponsSection() {
    return (
        <section className="coupons">
            <div className="coupons__inner container">
                <div className="coupons__row row">
                    <div className="coupons__column coupons__column--1 column">
                        <Link to="/shop" className="coupons__coupon coupons__coupon--1">
                            <div className="coupons__coupon-content">
                                <span className="coupons__promo promo">Natural!!</span>
                                <h3 className="coupons__title h3">Get Garden Fresh Fruits</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="coupons__column coupons__column--2 column">
                        <Link to="/shop" className="coupons__coupon coupons__coupon--2">
                            <div className="coupons__coupon-content">
                                <span className="coupons__promo promo">Offer!!</span>
                                <h3 className="coupons__title h3">Get 10% off on Vegetables</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CouponsSection