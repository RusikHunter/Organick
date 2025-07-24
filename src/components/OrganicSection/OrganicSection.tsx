import "./OrganicSection.scss"
import ProductsWrap from "@components/ProductsWrap/ProductsWrap"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@interfaces/routeLink"
import { Routes } from "@config/routes"

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
                        <RouteLink color={RouteLinkColor.YELLOW} path={Routes.SHOP} text="View All Products" className="organic__link" />
                    </div>
                </div>

                <div className="organic__row organic__row--2 row">
                    <div className="organic__column organic__column--3 column">
                        <ProductsWrap defaultCardsCount={4} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrganicSection