import React, { useCallback } from "react"
import { setIsBurgerMenuOpen } from "@store/reducers/clientReducer"
import "./BurgerButton.scss"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"

function BurgerButton() {
    const dispatch = useAppDispatch()

    const isBurgerMenuOpen = useAppSelector(state => state.client.isBurgerMenuOpen)

    const handleClick = useCallback(() => {
        dispatch(setIsBurgerMenuOpen())
    }, [dispatch])

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

export default React.memo(BurgerButton)