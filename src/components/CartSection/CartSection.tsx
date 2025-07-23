import React from "react"
import "./CartSection.scss"
import CartProductItem from "@components/CartProductItem/CartProductItem"
import { Link } from "react-router-dom"
import { useAppSelector } from "@hooks/useAppSelector"
import { useMemo, useState } from "react"
import { promocodes } from "@mocks/promocodes"
import { TAXES_VALUE, DELIVERY_VALUE } from "@config/product-settings"

function CartSection() {
    const [promocode, setPromocode] = useState<string>("")
    const [discount, setDiscount] = useState<number>(0)

    const cart = useAppSelector(state => state.client.cart)
    const products = useAppSelector(state => state.client.products)

    const handlePromocodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPromocode(value)

        setDiscount(value.length === 8 && promocodes.includes(value) ? 5 : 0)
    }

    const totalCount = useMemo(() => cart.reduce((acc, item) => acc + item.count, 0), [cart])

    const totalPrice = useMemo(() => {
        if (totalCount === 0) return 0

        const sum = cart.reduce((acc, item) => {
            const product = products.find(p => p.id === item.id)
            if (!product) return acc
            return acc + item.count * product.discountPrice
        }, 0)

        return sum + TAXES_VALUE + DELIVERY_VALUE - discount
    }, [cart, products, totalCount, discount])

    const displayTotalPrice = totalPrice.toFixed(2)

    return (
        <section className="cart">
            {products.length
                ?
                (
                    cart.length > 0
                        ?
                        <div className="cart__inner container">
                            <div className="cart__row cart__row--1 row">
                                <div className="cart__product-list">
                                    {cart.map((cartItem) => (
                                        <CartProductItem key={cartItem.id} cartItem={cartItem} />
                                    ))}
                                </div>
                            </div>

                            <div className="cart__row cart__row--2 row">
                                <div className="cart__column column">
                                    <div className="cart__order-details-wrap">
                                        <h5 className="cart__count h5">Total products quantity: {totalCount}
                                            {!totalCount ? <span className="cart__count cart__count--any text">You have not selected any items</span> : null}
                                        </h5>
                                        {totalCount ? <h6 className="cart__details">Taxes: 2.00$</h6> : null}
                                        {totalCount ? <h6 className="cart__details">Delivery: 5.00$</h6> : null}

                                        {totalCount ? <label htmlFor="cartInputPromocode" className="cart__label label">
                                            Do you have Promocode?

                                            <input
                                                id="cartInputPromocode"
                                                className="cart__input input"
                                                placeholder="Write Your Promocode"
                                                value={promocode}
                                                onChange={handlePromocodeChange}
                                                maxLength={8}
                                            />
                                        </label> : null}

                                        <h3 className="cart__price h3">Total price: {Number(displayTotalPrice)}$</h3>
                                    </div>

                                    {totalPrice ? <Link to="/payment" className="cart__link" tabIndex={-1} state={{ totalPrice, totalCount }}>
                                        <button className="cart__button morenews__button--more button button--blue">
                                            For Payment

                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                                <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </Link> : null}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="cart__inner container">
                            <h5 className="cart__text--empty h5">Cart is empty</h5>
                        </div>
                )
                :
                (
                    <div className="cart__inner container">
                        <h5 className="cart__title--loading h5">Loading...</h5>
                    </div>
                )
            }
        </section>
    )
}

export default React.memo(CartSection)