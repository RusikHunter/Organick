import "./OurProductsSection.scss"
import ProductsWrap from "@components/ProductsWrap/ProductsWrap"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"
import { Routes } from "@config/routes"

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
                        <RouteLink color={RouteLinkColor.BLUE} path={Routes.SHOP} text="Load More" className="our-products__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProductsSection