import { Link } from "react-router-dom"
import Logo from "@assets/icons/logo.svg"

function HeaderLogo() {
    return (
        <Link to="/" className="header__logo-link">
            <img className="header__logo" src={Logo} alt="Organick" width={199} height={54} loading="lazy" />
        </Link>
    )
}

export default HeaderLogo