import "./Header.scss"
import BurgerButton from "../BurgerButton/BurgerButton"
import { Link } from "react-router-dom"
import DropdownPages from "../DropdownPages/DropdownPages"
import Logo from "../../images/icons/logo.svg"
import DropdownSearch from "../DropdownSearch/DropdownSearch"

function Header() {
    return (
        <header className="header">
            <div className="header__inner container">
                <div className="header__row row">
                    <div className="header__column header__column--1 column">
                        <Link to="/" className="header__logo-link">
                            <img className="header__logo" src={Logo} alt="Organick" width={199} height={54} />
                        </Link>
                    </div>
                    <div className="header__column header__column--2 column">
                        <nav className="header__navigation">
                            <ul className="header__navigation-list">
                                <li className="header__navigation-list-item">
                                    <Link className="header__navigation-link" to="/">Home</Link>
                                </li>
                                <li className="header__navigation-list-item">
                                    <Link className="header__navigation-link" to="/about">About</Link>
                                </li>
                                <li className="header__navigation-list-item">
                                    <DropdownPages />
                                </li>
                                <li className="header__navigation-list-item">
                                    <Link className="header__navigation-link" to="/shop">Shop</Link>
                                </li>
                                <li className="header__navigation-list-item">
                                    <Link className="header__navigation-link" to="/portfolio">Projects</Link>
                                </li>
                                <li className="header__navigation-list-item">
                                    <Link className="header__navigation-link" to="/blog">News</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__column header__column--3 column">
                        <DropdownSearch />

                        <Link to="/cart" className="header__link--cart" tabIndex={-1}>
                            <button className="header__button--cart">
                                <span className="header__button--cart-decoration">
                                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.79102 1H5.57291L8.40933 17.0731H23.5369" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <span className="header__button--cart-text">
                                    Cart (0)
                                </span>
                            </button>
                        </Link>

                        <BurgerButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header