import "./DropdownSearch.scss"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import TEMPBANANA from "../../images/images/TEMP-BANANA.png"
import { setIsBurgerMenuOpen } from "../../store/reducers/clientReducer"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"

function DropdownSearch() {
    const [isSearhDropdownShowed, setIsSearhDropdownShowed] = useState<boolean>(false)

    const searchDropdownRef = useRef<HTMLDivElement | null>(null)
    const searchWrapRef = useRef<HTMLDivElement | null>(null)

    const dispatch = useAppDispatch()
    const isBurgerMenuOpen = useAppSelector(state => state.client.isBurgerMenuOpen)

    const handleSearchClick = (): void => {
        setIsSearhDropdownShowed(true)

        if (isBurgerMenuOpen) {
            dispatch(setIsBurgerMenuOpen())
        }
    }

    const handleCloseClick = (): void => {
        setIsSearhDropdownShowed(false)
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent): void => {
            if (
                searchWrapRef.current
                && searchWrapRef.current.contains(e.target as Node)
                && !(e.target instanceof HTMLElement && e.target.closest('.dropdown__product-card'))) {

                return
            }

            setIsSearhDropdownShowed(false)
        }

        window.addEventListener("click", handleOutsideClick)

        return () => {
            window.removeEventListener("click", handleOutsideClick)
        }
    }, [isSearhDropdownShowed])

    // ! TODO ---> FIX PROBLEM WITH OPACITY AND ADD TOP -1000PX 

    return (
        <div className="search-wrap" ref={searchWrapRef}>
            <label htmlFor="headerInputSearch" className="search" onClick={handleSearchClick}>
                <input type="text" id="headerInputSearch" className="dropdown__input dropdown__input--search" />

                <button className="search__button">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z" fill="#FAFAFA" />
                    </svg>
                </button>
            </label>

            <div
                className={`search__dropdown dropdown ${isSearhDropdownShowed ? 'dropdown--active ' : ''}overlay`}
                ref={searchDropdownRef}
            >
                <div className="dropdown__list-wrap">
                    <ul className="dropdown__list">
                        <li className="dropdown__list-item">
                            <Link to={`/shop/${1}`} className="dropdown__product-card" tabIndex={isSearhDropdownShowed ? 0 : -1}>
                                <img src={TEMPBANANA} alt="Fresh banana" className="dropdown__product-image" width={40} height={40} />

                                <h6 className="dropdown__product-title">Fresh Banana Fruites</h6>

                                <span className="dropdown__product-price">13.00$</span>
                            </Link>
                        </li>
                        <li className="dropdown__list-item">
                            <Link to={`/shop/${1}`} className="dropdown__product-card" tabIndex={isSearhDropdownShowed ? 0 : -1}>
                                <img src={TEMPBANANA} alt="Fresh banana" className="dropdown__product-image" width={40} height={40} />

                                <h6 className="dropdown__product-title">Fresh Banana Fruites</h6>

                                <span className="dropdown__product-price">13.00$</span>
                            </Link>
                        </li>
                        <li className="dropdown__list-item">
                            <Link to={`/shop/${1}`} className="dropdown__product-card" tabIndex={isSearhDropdownShowed ? 0 : -1}>
                                <img src={TEMPBANANA} alt="Fresh banana" className="dropdown__product-image" width={40} height={40} />

                                <h6 className="dropdown__product-title">Fresh Banana Fruites</h6>

                                <span className="dropdown__product-price">13.00$</span>
                            </Link>
                        </li>
                        <li className="dropdown__list-item">
                            <Link to={`/shop/${1}`} className="dropdown__product-card" tabIndex={isSearhDropdownShowed ? 0 : -1}>
                                <img src={TEMPBANANA} alt="Fresh banana" className="dropdown__product-image" width={40} height={40} />

                                <h6 className="dropdown__product-title">Fresh Banana Fruites</h6>

                                <span className="dropdown__product-price">13.00$</span>
                            </Link>
                        </li>
                        <li className="dropdown__list-item">
                            <Link to={`/shop/${1}`} className="dropdown__product-card" tabIndex={isSearhDropdownShowed ? 0 : -1}>
                                <img src={TEMPBANANA} alt="Fresh banana" className="dropdown__product-image" width={40} height={40} />

                                <h6 className="dropdown__product-title">Fresh Banana Fruites</h6>

                                <span className="dropdown__product-price">13.00$</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <button className="dropdown__button--close" onClick={handleCloseClick} tabIndex={-1}>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="10" y2="10" stroke="black" strokeWidth="2" />
                        <line x1="0" y1="10" x2="10" y2="0" stroke="black" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default DropdownSearch