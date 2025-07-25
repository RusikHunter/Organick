import "./CreativeSection.scss"
import CreativeSectionImage from "./CreativeSectionImage"
import CreativeSectionContent from "./CreativeSectionContent"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"
import { Routes } from "@config/routes"

function CreativeSection() {
    return (
        <section className="creative">
            <div className="creative__inner container">
                <div className="creative__row row">
                    <div className="creative__column creative__column--1 column">
                        <CreativeSectionImage />
                    </div>

                    <div className="creative__column creative__column--2 column">
                        <CreativeSectionContent />

                        <RouteLink color={RouteLinkColor.BLUE} path={Routes.BLOG} text={"Explore More"} className="creative__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreativeSection