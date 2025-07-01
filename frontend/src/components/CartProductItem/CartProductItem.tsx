import "./CartProductItem.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"
import DeleteIcon from "../../images/icons/delete.svg"
import type { CartProductItemProps } from "../../interfaces/cartProductItemProps"

function CartProductItem({ cartProduct }: CartProductItemProps) {
    const [count, setCount] = useState<string>(cartProduct.count.toString())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCount(e.target.value)
    }

    return (
        <article className="cart-item">
            <div className="cart-item__content">
                <ProductCard isCartItem={true} productData={cartProduct.product} />
            </div>

            <div className="cart-item__controls">
                <label htmlFor="cartItemInputCount" className="cart-item__label">
                    Quantity:
                    <input type="number" className="cart-item__input" id="cartItemInputCount" value={count} onChange={handleChange} />
                </label>

                <button className="cart-item__button--delete">
                    <img src={DeleteIcon} alt="Delete" width={45} height={45} />
                </button>
            </div>
        </article>
    )
}

export default CartProductItem