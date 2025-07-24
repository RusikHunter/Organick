import BurgerButton from "@components/BurgerButton/BurgerButton"
import DropdownSearch from "@components/DropdownSearch/DropdownSearch"
import { Link } from "react-router-dom"
import { useAppSelector } from "@hooks/useAppSelector"
import { Routes } from "@config/routes"
import HeaderSVGDecoration from "./HeaderSVGDecoration"

function HeaderControls() {
    const cart = useAppSelector(state => state.client.cart)

    return (
        <>
            <DropdownSearch />

            <Link to={Routes.CART} className="header__link--cart" tabIndex={-1}>
                <button className="header__button--cart">
                    <span className="header__button--cart-decoration">
                        <HeaderSVGDecoration />
                    </span>

                    <span className="header__button--cart-text">
                        Cart ({cart.length})
                    </span>
                </button>
            </Link>

            <BurgerButton />
        </>
    )
}

export default HeaderControls