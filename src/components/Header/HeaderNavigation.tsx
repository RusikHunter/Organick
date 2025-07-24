import { Link } from "react-router-dom"
import type { RouteLinkObject } from "@interfaces/routeLinkObject"
import { Routes } from "@config/routes"
import DropdownPages from "@components/DropdownPages/DropdownPages"

function HeaderNavigation() {
    const links: RouteLinkObject[] = [
        { path: Routes.MAIN, content: "Home" },
        { path: Routes.ABOUT, content: "About" },
        // HACK: this list item is not a route link
        { path: "DROPDOWN", content: "DROPDOWN" },
        { path: Routes.SHOP, content: "Shop" },
        { path: Routes.PORTFOLIO, content: "Projects" },
        { path: Routes.BLOG, content: "Blog" }
    ]

    return (
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                {links.map((link, index) => (
                    link.path === "DROPDOWN"
                        ?
                        <li key={index} className="header__navigation-list-item">
                            <DropdownPages />
                        </li>
                        :
                        <li key={index} className="header__navigation-list-item">
                            <Link className="header__navigation-link" to={link.path}>{link.content}</Link>
                        </li>
                ))}
            </ul>
        </nav>
    )
}

export default HeaderNavigation