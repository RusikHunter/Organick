import { Link } from "react-router-dom"
import { Routes } from "../../config/routes"
import type { RouteLink } from "../../interfaces/routeLink"

function FooterLinks() {
    const links: RouteLink[] = [
        { path: Routes.MAIN, text: "Style Guide" },
        { path: Routes.NOT_FOUND, text: "404 Not Found" },
        { path: Routes.PROTECTED, text: "Password Protected" },
        { path: Routes.LICENSES, text: "Licenses" },
        { path: Routes.CHANGELOG, text: "Changelog" }
    ]

    return (
        <ul className="footer__list footer__list--utility-pages">
            {links.map((link, index) => (
                <li className="footer__list-item footer__list-item--utility-pages">
                    <Link key={index} to={link.path} className="footer__link text">{link.text}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks