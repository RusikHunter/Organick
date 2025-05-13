import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import "./DropdownPages.scss"

function DropdownPages() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationButtonRef = useRef<HTMLButtonElement | null>(null)
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const handleClick = (): void => {
        console.log('123')
        setIsOpen(prev => !prev)
    }

    // this useEffect subscribes to an event that ensures
    // that when the dropdown is open and a button is pressed anywhere,
    // the dropdown is closed

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (): void => {
            setIsOpen(false)
        }

        const timer: number = setTimeout(() => {
            window.addEventListener("click", handleClickOutside)
        }, 0)

        return () => {
            clearTimeout(timer)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    useEffect(() => {
        const handleFocus = (e: FocusEvent): void => {
            if (e.target === navigationButtonRef.current
                || navRefs.current.includes(e.target as HTMLAnchorElement)
            ) {
                console.log('a')

                // HACK: when the element gets focus, isOpen becomes true,
                // but then handleClick is triggered and isOpen becomes false again.
                // so a delay is added for focusin

                setTimeout(() => {
                    setIsOpen(true)
                }, 100)
            }
            else {
                console.log('b')
                setIsOpen(false)
            }
        }

        document.addEventListener('focusin', handleFocus)

        return () => {
            document.removeEventListener('focusin', handleFocus)
        }
    }, [])

    return (
        <div className="header__dropdown-wrap">
            <button className={`header__navigation-button ${isOpen ? `header__navigation-button--active` : ''}`} onClick={handleClick} ref={navigationButtonRef}>
                Pages

                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.791016 1.5L3.79102 4.5L6.79102 1.5" stroke="#274C5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className={`header__dropdown header__dropdown--pages ${isOpen ? `header__dropdown--pages--active` : ''}`}>
                <ul className="header__dropdown-list">
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/services" ref={el => void (navRefs.current[0] = el)}>Services</Link>
                    </li>
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/team" ref={el => void (navRefs.current[1] = el)}>Team</Link>
                    </li>
                    <li className="header__dropdown-list-item">
                        <Link className="header__navigation-link" to="/contact" ref={el => void (navRefs.current[2] = el)}>Contact Us</Link>
                    </li>
                </ul >
            </div >
        </div >
    )
}

export default DropdownPages