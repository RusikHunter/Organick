import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import { Link } from "react-router-dom"
import "./BurgerMenu.scss"
import { useEffect, useRef } from "react"

function BurgerMenu() {
    const isBurgerMenuOpen = useSelector((state: RootState) => state.client.isBurgerMenuOpen)
    const MAX_TABLET_VIEWPORT_WIDTH: number = 1024

    const burgerMenuRef = useRef<HTMLDivElement | null>(null)

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
        <aside className={`burger-menu ${isBurgerMenuOpen ? `burger-menu--active` : ''}`} role="dialog" aria-modal="true" ref={burgerMenuRef}>
            <div className="burger-menu__wrap">
                <nav className="burger-menu__navigation">
                    <ul className="burger-menu__navigation-list">
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/">Home</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/about">About</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/services">Services</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/team">Team</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/shop">Shop</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/portfolio">Projects</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/blog">News</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default BurgerMenu