import { useDispatch } from "react-redux"
import { setIsBurgerMenuOpen } from "../../store/reducers/clientReducer"
import { useState } from "react"
import "./BurgerButton.scss"

function BurgerButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
        dispatch(setIsBurgerMenuOpen())
    }

    // ! todo --> border-radius for decoration lines

    return (
        <button className={`burger-button${isOpen ? ` burger-button--active` : ''}`} onClick={handleClick}>
            <div className="burger-button__decoration-wrap">
                <div className="burger-button__decoration-line"></div>
                <div className="burger-button__decoration-line"></div>
                <div className="burger-button__decoration-line"></div>
            </div>
        </button>
    )
}

export default BurgerButton