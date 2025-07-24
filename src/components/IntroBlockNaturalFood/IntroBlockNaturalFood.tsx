import "./IntroBlockNaturalFood.scss"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@interfaces/routeLink"
import { Routes } from "@config/routes"

function IntroBlockNaturalFood() {
    return (
        <div className="intro__column intro__column--natural-food column">
            <span className="intro__promo intro__promo--natural-food promo">100% Natural Food</span>
            <h1 className="intro__title intro__title--natural-food h1">Choose the best healthier way <span className="intro__title--natural-food-edge">of life</span></h1>

            <RouteLink color={RouteLinkColor.YELLOW} path={Routes.SHOP} text={"Explore Now"} className="intro__link" />
        </div>
    )
}

export default IntroBlockNaturalFood