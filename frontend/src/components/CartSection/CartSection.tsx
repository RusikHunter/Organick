import "./CartSection.scss"
import CartProductItem from "../CartProductItem/CartProductItem"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/useAppSelector"
import type { LocalStorageItem } from "../../interfaces/localStorageItem"
import type { Product } from "../../interfaces/product"
import type { CartProduct } from "../../interfaces/cartProduct"

function CartSection() {
    function getAllLocalStorageData(): Record<string, unknown> {
        const data: Record<string, unknown> = {}

        for (let i = 0; i < localStorage.length; ++i) {
            const key = localStorage.key(i)
            if (!key) continue

            try {
                const value = localStorage.getItem(key)
                data[key] = value ? JSON.parse(value) : null
            } catch {
                data[key] = localStorage.getItem(key)
            }
        }

        return data
    }

    function isLocalStorageItem(item: unknown): item is LocalStorageItem {
        return typeof item === "object" && item !== null && "id" in item && "productCount" in item
    }

    const storedProducts: unknown[] = Object.values(getAllLocalStorageData())

    const products: Product[] = useAppSelector(state => state.client.products)

    const cartProducts: CartProduct[] = storedProducts
        .filter(isLocalStorageItem)
        .map(item => { return { product: products[item.id], count: item.productCount } })

    console.log(cartProducts)

    // ! todo --> loading...

    return (
        products.length && <section className="cart">
            <div className="cart__inner container">
                <div className="cart__row cart__row--1 row">
                    <div className="cart__product-list">
                        {cartProducts.map(product => (
                            <CartProductItem cartProduct={product} />
                        ))}
                    </div>
                </div>

                <div className="cart__row cart__row--2 row">
                    <div className="cart__column column">
                        <div className="cart__order-details-wrap">
                            <h5 className="cart__count h5">Total products quantity: 2</h5>
                            <h6 className="cart__details">Taxes: 2.00$</h6>
                            <h6 className="cart__details">Delivery: 5.00$</h6>

                            <label htmlFor="cartInputPromocode" className="cart__label label">
                                Do you have Promocode?

                                <input
                                    id="cartInputPromocode"
                                    className="cart__input input"
                                    placeholder="Write Your Promocode"
                                />
                            </label>

                            <h3 className="cart__price h3">Total price: 33.00$</h3>
                        </div>

                        <Link to="/payment" className="cart__link">
                            <button className="cart__button morenews__button--more button button--blue">
                                For Payment

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartSection