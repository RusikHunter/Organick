import "./CouponsSection.scss"
import { Link } from "react-router-dom"
import { Routes } from "@config/routes"
import type { RouteLinkObject } from "@interfaces/routeLinkObject"

function CouponsSection() {
    const links: RouteLinkObject[] = [
        {
            path: Routes.SHOP,
            content: (
                <>
                    <span className="coupons__promo promo">Natural!!</span>
                    <h3 className="coupons__title h3">Get Garden Fresh Fruits</h3>
                </>
            )
        },
        {
            path: Routes.SHOP,
            content: (
                <>
                    <span className="coupons__promo promo">Offer!!</span>
                    <h3 className="coupons__title h3">Get 10% off on Vegetables</h3>
                </>
            )
        },
    ]

    return (
        <section className="coupons">
            <div className="coupons__inner container">
                <div className="coupons__row row">
                    {links.map((link, index) => (
                        <div className={`coupons__column coupons__column--${index + 1} column`} key={index}>
                            <Link to={link.path} className={`coupons__coupon coupons__coupon--${index + 1}`}>
                                <div className="coupons__coupon-content">
                                    {link.content}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CouponsSection