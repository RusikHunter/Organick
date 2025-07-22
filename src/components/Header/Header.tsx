import "./Header.scss"
import HeaderLogo from "./HeaderLogo"
import HeaderNavigation from "./HeaderNavigation"
import HeaderControls from "./HeaderControls"

function Header() {
    return (
        <header className="header">
            <div className="header__inner container">
                <div className="header__row row">
                    <div className="header__column header__column--1 column">
                        <HeaderLogo />
                    </div>
                    <div className="header__column header__column--2 column">
                        <HeaderNavigation />
                    </div>
                    <div className="header__column header__column--3 column">
                        <HeaderControls />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header