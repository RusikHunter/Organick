import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import "./DropdownPages.scss"

function DropdownPages() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isKeyboard, setIsKeyboard] = useState<boolean>(false)

    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const navigationButtonRef = useRef<HTMLButtonElement | null>(null)

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                setIsKeyboard(true)
            }
        }

        const handleMouseDown = () => {
            setIsKeyboard(false)
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("mousedown", handleMouseDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("mousedown", handleMouseDown)
        }
    }, [])

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (e: MouseEvent): void => {
            if (
                navigationButtonRef.current &&
                navigationButtonRef.current.contains(e.target as Node)
            ) {
                return
            }

            setIsOpen(false)
        }

        window.addEventListener("click", handleClickOutside)
        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    const handleFocus = () => {
        if (isKeyboard) {
            setIsOpen(true)
        }
    }

    const handleBlur = () => {
        setTimeout(() => {
            if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
                setIsOpen(false)
            }
        }, 0)
    }

    return (
        <div className="header__dropdown-wrap"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={wrapperRef}
        >
            <button className={`header__navigation-button ${isOpen ? `header__navigation-button--active` : ''}`}
                onClick={handleClick}
                ref={navigationButtonRef}
            >
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
                </ul >
            </div >
        </div >
    )
}

export default DropdownPages