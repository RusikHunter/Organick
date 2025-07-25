import "./MoreNewsSection.scss"
import NewsWrap from "@components/NewsWrap/NewsWrap"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"
import { Routes } from "@config/routes"

function MoreNewsSection() {
    return (
        <section className="morenews">
            <div className="morenews__inner container">
                <div className="morenews__row morenews__row--1 row">
                    <div className="morenews__column morenews__column--1 column">
                        <span className="morenews__promo promo">News</span>
                        <h2 className="morenews__title h2">Discover weekly content about organic food, & more</h2>
                    </div>

                    <div className="morenews__column morenews__column--2 column">
                        <RouteLink color={RouteLinkColor.TRANSPARENT} path={Routes.BLOG} text="More News" className="morenews__link" />
                    </div>
                </div>

                <div className="morenews__row morenews__row--2 row">
                    <NewsWrap defaultNewsCount={2} />
                </div>
            </div>
        </section>
    )
}

export default MoreNewsSection