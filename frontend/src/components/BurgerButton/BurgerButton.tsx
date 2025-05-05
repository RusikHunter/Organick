import "./BurgerButton.scss"
import { useState } from "react"

function BurgerButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
        console.log(isOpen)
    }

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