import "./CartSection.scss"
import CartProductItem from "@components/CartProductItem/CartProductItem"
import { Link } from "react-router-dom"
import { useAppSelector } from "@hooks/useAppSelector"
import { useEffect, useState } from "react"
import { promocodes } from "@mocks/promocodes"
import { useAppDispatch } from "@hooks/useAppDispatch"
import { setTotalCount, setTotalPrice } from "@store/reducers/clientReducer"

function CartSection() {
    const [promocode, setPromocode] = useState<string>("")
    const [discount, setDiscount] = useState<number>(0)

    const totalCount = useAppSelector(state => state.client.totalCount)
    const totalPrice = useAppSelector(state => state.client.totalPrice)

    const dispatch = useAppDispatch()

    const cart = useAppSelector(state => state.client.cart)
    const products = useAppSelector(state => state.client.products)

    const TAXES_VALUE = 2
    const DELIVERY_VALUE = 5

    const handlePromocodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value
        setPromocode(value)

        if (event.target.value.length === 8) {
            const isActivePromocode: boolean = promocodes.includes(event.target.value)

            if (isActivePromocode) {
                setDiscount(5)
            } else {
                setDiscount(0)
            }
        } else {
            setDiscount(0)
        }
    }

    useEffect(() => {
        const totalCount = cart.reduce((accumulator, item) => accumulator + item.count, 0)
        const totalPrice = totalCount === 0
            ? 0
            : (products.length > 0
                ? cart.reduce((accumulator, item) => {
                    const product = products.find(product => product.id === item.id)
                    if (!product) return accumulator
                    return accumulator + (item.count * product.discountPrice)
                }, 0) + TAXES_VALUE + DELIVERY_VALUE - discount
                : 0)

        dispatch(setTotalCount(totalCount))
        dispatch(setTotalPrice(totalPrice.toFixed(2)))
    }, [cart, discount])

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

                                        <h3 className="cart__price h3">Total price: {Number(totalPrice).toFixed(2)}$</h3>
                                    </div>

                                    {totalPrice ? <Link to="/payment" className="cart__link" tabIndex={-1}>
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

export default CartSection