import React, { useCallback } from "react"
import "./DropdownSearch.scss"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { setIsBurgerMenuOpen } from "@store/reducers/clientReducer"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import type { Product } from "@entities/product"
import { Routes } from "@config/routes"

function DropdownSearch() {
    const [isSearchDropdownShowed, setIsSearchDropdownShowed] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [foundProducts, setFoundProducts] = useState<Product[]>([])

    const searchDropdownRef = useRef<HTMLDivElement | null>(null)
    const searchWrapRef = useRef<HTMLDivElement | null>(null)

    const dispatch = useAppDispatch()
    const isBurgerMenuOpen: boolean = useAppSelector(state => state.client.isBurgerMenuOpen)
    const products: Product[] = useAppSelector(state => state.client.products)

    const handleChangeSearchTerm = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value)
    }, [isSearchDropdownShowed, searchTerm, foundProducts, isBurgerMenuOpen])

    const handleSearchClick = useCallback((): void => {
        if (!searchTerm.length) return

        setIsSearchDropdownShowed(true)

        if (isBurgerMenuOpen) {
            dispatch(setIsBurgerMenuOpen())
        }

        const foundProducts = products.filter(product => {
            return product.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())
        })

        setFoundProducts(foundProducts)
    }, [isSearchDropdownShowed, searchTerm, foundProducts, isBurgerMenuOpen])

    const handleCloseClick = useCallback((): void => {
        setIsSearchDropdownShowed(false)
    }, [isSearchDropdownShowed, searchTerm, foundProducts, isBurgerMenuOpen])

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent): void => {
            if (
                searchWrapRef.current
                && searchWrapRef.current.contains(e.target as Node)
                && !(e.target instanceof HTMLElement && e.target.closest('.dropdown__product-card'))) {

                return
            }

            setIsSearchDropdownShowed(false)
        }

        window.addEventListener("click", handleOutsideClick)

        return () => {
            window.removeEventListener("click", handleOutsideClick)
        }
    }, [isSearchDropdownShowed])

    return (
        <div className="search-wrap" ref={searchWrapRef}>
            <label htmlFor="headerInputSearch" className="search">
                <input
                    type="text"
                    id="headerInputSearch"
                    className="dropdown__input dropdown__input--search"
                    value={searchTerm}
                    onChange={handleChangeSearchTerm}
                />

                <button className="search__button" onClick={handleSearchClick}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4692 18.8921L16.7086 14.1315C17.8547 12.6057 18.4734 10.7485 18.4713 8.84016C18.4713 3.96573 14.5056 0 9.63118 0C4.75674 0 0.791016 3.96573 0.791016 8.84016C0.791016 13.7146 4.75674 17.6803 9.63118 17.6803C11.5395 17.6824 13.3967 17.0637 14.9225 15.9175L19.6831 20.6781C19.9241 20.8936 20.2384 21.0085 20.5615 20.9995C20.8846 20.9905 21.192 20.8581 21.4205 20.6295C21.6491 20.401 21.7815 20.0936 21.7905 19.7705C21.7996 19.4474 21.6846 19.1331 21.4692 18.8921ZM3.31678 8.84016C3.31678 7.59129 3.68711 6.37047 4.38094 5.33207C5.07478 4.29367 6.06095 3.48434 7.21476 3.00642C8.36856 2.52849 9.63818 2.40345 10.8631 2.64709C12.0879 2.89073 13.213 3.49212 14.0961 4.3752C14.9792 5.25829 15.5806 6.38341 15.8242 7.60828C16.0679 8.83315 15.9428 10.1028 15.4649 11.2566C14.987 12.4104 14.1777 13.3966 13.1393 14.0904C12.1009 14.7842 10.88 15.1546 9.63118 15.1546C7.95711 15.1526 6.35218 14.4866 5.16844 13.3029C3.98469 12.1192 3.31878 10.5142 3.31678 8.84016Z" fill="#FAFAFA" />
                    </svg>
                </button>
            </label>

            <div
                className={`search__dropdown dropdown ${isSearchDropdownShowed ? 'dropdown--active ' : ''}overlay`}
                ref={searchDropdownRef}
            >
                <div className={`dropdown__list-wrap${foundProducts.length === 0 ? ` dropdown__list-wrap--scrollbar-disabled` : ``}`}>
                    <ul className="dropdown__list">
                        {foundProducts.length === 0 ? <span className="dropdown__text">No results</span> : foundProducts.map((product) => (
                            <li className="dropdown__list-item" key={product.id}>
                                <Link to={`${Routes.SHOP}/${product.id}`} className="dropdown__product-card" tabIndex={isSearchDropdownShowed ? 0 : -1}>
                                    <img src={product.imageURL} alt={product.title} className="dropdown__product-image" loading="lazy" />

                                    <h6 className="dropdown__product-title">{product.title}</h6>

                                    <span className="dropdown__product-price">{product.discountPrice}$</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="dropdown__button--close" type="button" onClick={handleCloseClick} tabIndex={-1}>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="10" y2="10" stroke="black" strokeWidth="2" />
                        <line x1="0" y1="10" x2="10" y2="0" stroke="black" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default React.memo(DropdownSearch)