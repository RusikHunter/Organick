import "./ThankYouSection.scss"
import RouteLink from "@components/RouteLink/RouteLink"
import { Routes } from "@config/routes"
import { RouteLinkColor } from "@entities/routeLinkColorEnum"

function ThankYouSection() {
    return (
        <section className="thank-you">
            <div className="thank-you__inner container">
                <div className="thank-you__row row">
                    <div className="thank-you__column column">
                        <h4 className="thank-you__title h4">
                            Thank you for <span className="thank-you__title--green">your order</span>!
                        </h4>

                        <RouteLink color={RouteLinkColor.BLUE} path={Routes.MAIN} text="Go to Homepage" className="thank-you__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYouSection