import { Link } from "react-router-dom"
import "./CategoriesListSection.scss"
import { Routes } from "@config/routes"
import type { RouteLinkObject } from "@interfaces/routeLinkObject"

function CategoriesListSection() {
    const links: RouteLinkObject[] = [
        { path: Routes.SHOP, content: "Organic Juice" },
        { path: Routes.SHOP, content: "Organic Food" },
        { path: Routes.SHOP, content: "Nuts Cookies" }
    ]

    return (
        <section className="categories-list">
            <div className="categories-list__inner container">
                <div className="categories-list__row row">
                    <div className="categories-list__column column">
                        {links.map((link, index) => (
                            <Link key={index} className="categories-list__link" to={link.path}>
                                <div className={`categories-list__category categories-list__category--${index + 1}`}>
                                    <button className="categories-list__button button" tabIndex={-1}>{link.content}</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesListSection