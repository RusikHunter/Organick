import React, { useMemo, useCallback } from "react"
import { Link } from "react-router-dom"
import "./BurgerMenu.scss"
import { useRef } from "react"
import { useAppSelector } from "@hooks/useAppSelector"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { setIsBurgerMenuOpen } from "@store/reducers/clientReducer"
import type { RouteLinkObject } from "@interfaces/routeLinkObject"
import { Routes } from "@config/routes"

function BurgerMenu() {
    const dispatch = useAppDispatch()

    const isBurgerMenuOpen: boolean = useAppSelector(state => state.client.isBurgerMenuOpen)

    const burgerMenuRef = useRef<HTMLDivElement | null>(null)

    const links: RouteLinkObject[] = useMemo(() => [
        { path: Routes.MAIN, content: "Home" },
        { path: Routes.ABOUT, content: "About" },
        { path: Routes.SERVICES, content: "Services" },
        { path: Routes.TEAM, content: "Team" },
        { path: Routes.CONTACT, content: "Contact Us" },
        { path: Routes.SHOP, content: "Shop" },
        { path: Routes.PORTFOLIO, content: "Projects" },
        { path: Routes.BLOG, content: "Blog" }
    ], [])

    const handleBurgerClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (burgerMenuRef.current && isBurgerMenuOpen && burgerMenuRef.current.contains(event.target as Node)) {
            dispatch(setIsBurgerMenuOpen())
        }
    }, [dispatch, isBurgerMenuOpen])

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
                        {links.map(link => (
                            <li key={link.path} className="burger-menu__navigation-list-item">
                                <Link className="burger-menu__navigation-link" to={link.path} tabIndex={-1}>{link.content}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default React.memo(BurgerMenu)