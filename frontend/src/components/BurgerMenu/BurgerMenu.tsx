import { Link } from "react-router-dom"
import "./BurgerMenu.scss"
import { useEffect, useRef } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"

function BurgerMenu() {
    const isBurgerMenuOpen = useAppSelector(state => state.client.isBurgerMenuOpen)
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
                            <Link className="burger-menu__navigation-link" to="/" tabIndex={-1}>Home</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/about" tabIndex={-1}>About</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/services" tabIndex={-1}>Services</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/team" tabIndex={-1}>Team</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/contact" tabIndex={-1}>Contact Us</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/shop" tabIndex={-1}>Shop</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/portfolio" tabIndex={-1}>Projects</Link>
                        </li>
                        <li className="burger-menu__navigation-list-item">
                            <Link className="burger-menu__navigation-link" to="/blog" tabIndex={-1}>News</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default BurgerMenu