import "./GrowSection.scss"
import GrowSectionGridContent from "@components/GrowSection/GrowSectionGridContent"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@interfaces/routeLink"
import { Routes } from "@config/routes"

function GrowSection() {
    return (
        <section className="grow">
            <div className="grow__inner container">
                <div className="grow__row grow__row--1 row">
                    <div className="grow__column grow__column--1">
                        <span className="grow__promo promo">What we Grow</span>

                        <h2 className="grow__title h2">Better Agriculture
                            for
                            Better Future</h2>
                    </div>
                </div>
                <div className="grow__row grow__row--2 row">
                    <GrowSectionGridContent />
                </div>
                <div className="grow__row grow__row--3 row">
                    <div className="grow__column grow__column--2">
                        <RouteLink color={RouteLinkColor.TRANSPARENT} path={Routes.QUALITY} text={"Explore More"} className="grow__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrowSection