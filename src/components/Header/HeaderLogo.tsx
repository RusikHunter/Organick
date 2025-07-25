import { Link } from "react-router-dom"
import Logo from "@assets/icons/logo.svg"
import { Routes } from "@config/routes"

function HeaderLogo() {
    return (
        <Link to={Routes.MAIN} className="header__logo-link">
            <img className="header__logo" src={Logo} alt="Organick" loading="lazy" />
        </Link>
    )
}

export default HeaderLogo