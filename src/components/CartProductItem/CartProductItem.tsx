import "./CartProductItem.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"
import DeleteIcon from "../../assets/icons/delete.svg"
import type { CartProductItemProps } from "../../interfaces/cartProductItemProps"
import type { Product } from "../../interfaces/product"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addCartItem } from "../../store/reducers/clientReducer"
import { removeCartItem } from "../../store/reducers/clientReducer"
import { MIN_PRODUCT_COUNT, MAX_PRODUCT_COUNT } from "../../config/product-settings"

function CartProductItem({ cartItem }: CartProductItemProps) {
    const [productCount, setProductCount] = useState<string>(cartItem.count.toString())

    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.client.products)
    const cart = useAppSelector(state => state.client.cart)

    const cartProduct: Product = products.find(product => product.id === cartItem.id) as Product

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value = Number(event.target.value)

        if (value >= 0 && value <= MAX_PRODUCT_COUNT) {
            setProductCount(value.toString())
        } else if (value < 0) {
            value = MIN_PRODUCT_COUNT
            setProductCount(`${MIN_PRODUCT_COUNT}`)
        } else if (value > MAX_PRODUCT_COUNT) {
            value = MAX_PRODUCT_COUNT
            setProductCount(`${MAX_PRODUCT_COUNT}`)
        }

        const cartItemToChange = {
            id: cartItem.id,
            count: Number(value)
        }

        dispatch(addCartItem(cartItemToChange))
    }

    const handleDelete = (): void => {
        const index = cart.findIndex(item => item.id === cartItem.id)

        dispatch(removeCartItem(index))
    }

    return (
        <article className="cart-item">
            <div className="cart-item__content">
                <ProductCard isCartItem={true} productData={cartProduct} />
            </div >

            <div className="cart-item__controls">
                <label htmlFor="cartItemInputCount" className="cart-item__label">
                    Quantity:
                    <input type="number" className="cart-item__input" id={`cartItemInputCount-${cartItem.id}`} value={productCount} onChange={handleChange} />
                </label>

                <button className="cart-item__button--delete" onClick={handleDelete}>
                    <img src={DeleteIcon} alt="Delete" width={45} height={45} loading="lazy" />
                </button>
            </div>
        </article >
    )
}

export default CartProductItem