import "./CartProductItem.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"

function CartProductItem() {
    const [count, setCount] = useState<string>("0")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCount(e.target.value)
    }

    return (
        <article className="cart-item">
            <div className="cart-item__content">
                <ProductCard isCartItem={true} />
            </div>

            <div className="cart-item__controls">
                <label htmlFor="cartItemInputCount" className="cart-item__label">
                    <input type="number" className="cart-item__input" id="cartItemInputCount" value={count} onChange={handleChange} />
                </label>

                <button className="cart-item__button--delete">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <circle cx="20" cy="20" r="20" fill="#f44336" />
                        <path
                            d="M15 14h10m-8 0v10m6-10v10M13 14h14v1a2 2 0 01-2 2H15a2 2 0 01-2-2v-1z"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartProductItem