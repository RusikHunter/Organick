import { Link } from "react-router-dom"
import "./BurgerMenu.scss"
import { useEffect, useRef } from "react"
import { useAppSelector } from "@hooks/useAppSelector"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { setIsBurgerMenuOpen } from "@store/reducers/clientReducer"
import type { RouteLink } from "@interfaces/routeLink"
import { Routes } from "@config/routes"

function BurgerMenu() {
    const MAX_TABLET_VIEWPORT_WIDTH: number = 1024

    const dispatch = useAppDispatch()

    const isBurgerMenuOpen = useAppSelector(state => state.client.isBurgerMenuOpen)

    const burgerMenuRef = useRef<HTMLDivElement | null>(null)

    const links: RouteLink[] = [
        { path: Routes.MAIN, content: "Home" },
        { path: Routes.ABOUT, content: "About" },
        { path: Routes.SERVICES, content: "Services" },
        { path: Routes.TEAM, content: "Team" },
        { path: Routes.CONTACT, content: "Contact Us" },
        { path: Routes.SHOP, content: "Shop" },
        { path: Routes.PORTFOLIO, content: "Projects" },
        { path: Routes.BLOG, content: "Blog" }
    ]

    const handleBurgerClick = (event: React.MouseEvent): void => {
        if (burgerMenuRef.current && isBurgerMenuOpen) {
            if (burgerMenuRef.current.contains(event.target as Node)) {
                dispatch(setIsBurgerMenuOpen())
            }
        }
    }

    // The method is needed to hide/appear the burger menu
    // when changing the screen width in the browser devtools
    // without animation

    const onWindowResize = (): void => {
        if (burgerMenuRef.current) {
            if (window.innerWidth > MAX_TABLET_VIEWPORT_WIDTH && isBurgerMenuOpen) {
                burgerMenuRef.current.style.display = "none"
            }
            else if (window.innerWidth <= MAX_TABLET_VIEWPORT_WIDTH && isBurgerMenuOpen) {
                burgerMenuRef.current.style.display = "block"
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize)

        onWindowResize()

        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, [isBurgerMenuOpen])

    return (
        <aside
            className={`burger-menu ${isBurgerMenuOpen ? `burger-menu--active` : ''}`}
            role="dialog"
            aria-modal="true"
            ref={burgerMenuRef}
            onClick={handleBurgerClick}
        >
            <div className="burger-menu__wrap">
                <nav className="burger-menu__navigation">
                    <ul className="burger-menu__navigation-list">
                        {links.map((link, index) => (
                            <li key={index} className="burger-menu__navigation-list-item">
                                <Link className="burger-menu__navigation-link" to={link.path} tabIndex={-1}>{link.content}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default BurgerMenu