import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./DropdownPages.scss"

function DropdownPages() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = () => {
            setIsOpen(false)
        }

        const timer = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 0)

        return () => {
            clearTimeout(timer)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="header__dropdown-wrap">
            <button className={`header__navigation-button ${isOpen ? `header__navigation-button--active` : ''}`} onClick={handleClick}>
                Pages

                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.791016 1.5L3.79102 4.5L6.79102 1.5" stroke="#274C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className={`header__dropdown header__dropdown--pages ${isOpen ? `header__dropdown--pages--active` : ''}`}>
                <ul className="header__dropdown-list">
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/services">Services</Link>
                    </li>
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/team">Team</Link>
                    </li>
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropdownPages