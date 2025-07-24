import "./NotFoundSection.scss"
import RouteLink from "@components/RouteLink/RouteLink"
import { RouteLinkColor } from "@interfaces/routeLink"
import { Routes } from "@config/routes"

function NotFoundSection() {
    return (
        <section className="not-found">
            <div className="not-found__inner container">
                <div className="not-found__row row">
                    <div className="not-found__column column">
                        <div className="not-found__text-wrap">
                            <span className="not-found__number">404</span>

                            <h1 className="not-found__title">Page Not Found</h1>

                            <p className="not-found__text text">The page you are looking for doesn't exist or has been moved</p>
                        </div>

                        <RouteLink color={RouteLinkColor.BLUE} path={Routes.MAIN} text="Go to Homepage" className="not-found__link" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundSection