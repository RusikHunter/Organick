import { useDispatch, useSelector } from "react-redux"
import { setIsBurgerMenuOpen } from "../../store/reducers/clientReducer"
import { useState } from "react"
import type { RootState } from "../../store"
import "./BurgerButton.scss"

function BurgerButton() {
    const dispatch = useDispatch()

    const isBurgerMenuOpen = useSelector((state: RootState) => state.client.isBurgerMenuOpen)

    const handleClick = (): void => {
        dispatch(setIsBurgerMenuOpen())
    }

    // ! todo --> border-radius for decoration lines

    return (
        <button className={`burger-button${isBurgerMenuOpen ? ` burger-button--active` : ''}`} onClick={handleClick}>
            <div className="burger-button__decoration-wrap">
                <div className="burger-button__decoration-line"></div>
                <div className="burger-button__decoration-line"></div>
                <div className="burger-button__decoration-line"></div>
            </div>
        </button>
    )
}

export default BurgerButton