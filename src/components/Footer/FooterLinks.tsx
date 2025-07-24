import { Link } from "react-router-dom"
import { Routes } from "@config/routes"
import type { RouteLinkObject } from "@interfaces/routeLinkObject"

function FooterLinks() {
    const links: RouteLinkObject[] = [
        { path: Routes.MAIN, content: "Style Guide" },
        { path: Routes.NOT_FOUND, content: "404 Not Found" },
        { path: Routes.PROTECTED, content: "Password Protected" },
        { path: Routes.LICENSES, content: "Licenses" },
        { path: Routes.CHANGELOG, content: "Changelog" }
    ]

    return (
        <ul className="footer__list footer__list--utility-pages">
            {links.map((link, index) => (
                <li className="footer__list-item footer__list-item--utility-pages" key={index}>
                    <Link to={link.path} className="footer__link text">{link.content}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks