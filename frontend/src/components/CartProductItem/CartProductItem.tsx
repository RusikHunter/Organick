import "./CartProductItem.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"
import DeleteIcon from "../../images/icons/delete.svg"
import type { CartProductItemProps } from "../../interfaces/cartProductItemProps"
import type { Product } from "../../interfaces/product"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addCartItem } from "../../store/reducers/clientReducer"

function CartProductItem({ cartItem }: CartProductItemProps) {
    const [count, setCount] = useState<string>(cartItem.count.toString())

    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.client.products)

    const cartProduct: Product = products.find(product => product.id === cartItem.id) as Product

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value

        setCount(value)

        const cartItemToChange = {
            id: cartItem.id,
            count: Number(value)
        }

        dispatch(addCartItem(cartItemToChange))
    }

    return (
        <article className="cart-item">
            <div className="cart-item__content">
                <ProductCard isCartItem={true} productData={cartProduct} />
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