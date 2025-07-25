import React, { useCallback, useState } from "react"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { useAppSelector } from "@hooks/useAppSelector"
import { addCartItem } from "@store/reducers/clientReducer"
import type { CartItem } from "@entities/cartItem"
import { toast } from "react-toastify"
import Loader from "@components/Loader/Loader"
import RatingSVG from "@components/RatingSVG/RatingSVG"
import { validateProductCount } from "@utils/validateProductCount"
import type { ProductItemSectionProps } from "./ProductItemSection"

function ProductItemSectionData({ product, id }: ProductItemSectionProps) {
    const [productCount, setProductCount] = useState<string>('0')

    const dispatch = useAppDispatch()
    const cart: CartItem[] = useAppSelector(state => state.client.cart)

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = Number(event.target.value)

        validateProductCount(setProductCount, value)
    }, [setProductCount])

    const handleAdd = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()

        if (productCount === "0") {
            toast.error("Enter quality of product!")
            return
        }

        const cartItemToAdding: CartItem = {
            id: id,
            count: Number(productCount)
        }

        for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id === id) {
                cartItemToAdding.count += cart[i].count
            }
        }

        dispatch(addCartItem(cartItemToAdding))

        setProductCount("0")

        toast.success("Product added to the cart!")
    }, [productCount, cart, dispatch, id])

    return (
        <>
            {product
                ?
                <>
                    <div className="product-item__column product-item__column--1 column">
                        <span className="product-item__category">{product.type}</span>

                        <img src={product.imageURL} alt="Nuts" className="product-item__image" loading="lazy" />
                    </div>

                    <div className="product-item__column product-item__column--2 column">
                        <h3 className="product-item__title h3">{product.title}</h3>

                        <div className="product-item__rate">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <RatingSVG index={index} productRating={product.rating} key={index} />
                            ))}
                        </div>

                        <div className="product-item__price-wrap">
                            <span className="product-item__price--sale">
                                <s>
                                    {Number.isInteger(product.price) ? `${product.price}.00` : product.price}$
                                </s>
                            </span>

                            <span className="product-item__price h6">
                                {Number.isInteger(product.discountPrice) ? `${product.discountPrice}.00` : product.discountPrice}$
                            </span>
                        </div>

                        <p className="product-item__description text">{product.description}</p>

                        <form className="product-item__form">
                            <label htmlFor="productItemInputCount" className="product-item__label product-item__label--count">
                                Quantity:

                                <input
                                    type="number"
                                    className="product-item__input product-item__input--count"
                                    id="productItemInputCount"
                                    value={productCount}
                                    onChange={handleChange}
                                />
                            </label>

                            <button type="submit" className="product-item__input product-item__input--submit button button--blue" onClick={handleAdd}>
                                Add To Cart

                                <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.97641 6.12891L13.371 9.19342L9.97641 12.2579M12.8995 9.19342H6.01611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </ >
                :
                <Loader text={"Loading..."} />
            }
        </>
    )
}

export default React.memo(ProductItemSectionData)