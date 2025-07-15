import "./PaymentSection.scss"
import { useNavigate } from "react-router-dom"
import type { NavigateFunction } from "react-router-dom"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import type { SubmitHandler } from "react-hook-form"
import type { PaymentFormValues } from "../../interfaces/paymentFormValues"
import { toast } from "react-toastify"
import emailjs from '@emailjs/browser'
import { SERVICE_ID_ORDERS, TEMPLATE_ID_ORDERS, PUBLIC_KEY_ORDERS } from "../../assets/emailjs_keys"
import { setCart } from "../../store/reducers/clientReducer"
import { useAppDispatch } from "../../hooks/useAppDispatch"

function PaymentSection() {
    const navigate: NavigateFunction = useNavigate()
    const dispatch = useAppDispatch()

    const totalCount = useAppSelector(state => state.client.totalCount)
    const totalPrice = useAppSelector(state => state.client.totalPrice)

    const schema = yup.object().shape({
        full_name: yup.string().required("This field is required"),
        email: yup.string().email("Enter correct email").required("This field is required"),
        company: yup.string().required("This field is required"),
        address: yup.string().required("This field is required"),
        card: yup.string().required("This field is required").matches(/^(\d{4} \d{4} \d{4} \d{4})$/, "Card number must be in format XXXX-XXXX-XXXX-XXXX"),
        date: yup.string().required("This field is required").matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Date must be in MM/YY format with valid month"),
        cvv: yup.string().required("This field is required").matches(/^\d{3}$/, "CVV must be exactly 3 digits")
    })

    const { register, control, watch, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const full_name = watch("full_name")
    const email = watch("email")
    const company = watch("company")
    const address = watch("address")
    const card = watch("card")

    const onSubmit: SubmitHandler<PaymentFormValues> = async (data) => {
        const templateParams = {
            id: Math.floor(10000000 + Math.random() * 90000000).toString(),
            full_name: data.full_name,
            to_email: data.email,
            email: data.email,
            company: data.company,
            address: data.address,
            card: data.card,
            products_count: totalCount,
            total_price: totalPrice
        }

        try {
            await emailjs.send(
                SERVICE_ID_ORDERS,
                TEMPLATE_ID_ORDERS,
                templateParams,
                PUBLIC_KEY_ORDERS
            )

            toast.success("Order created!")
            reset()
            dispatch(setCart([]))
            navigate("/thankyou")
        } catch (error) {
            toast.error("Error creating.")
            reset()
            navigate("/cart")
        }
    }

    const onError = (): void => {
        toast.error("Incorrect form data!")
    }

    return (
        <section className="payment">
            <div className="payment__inner container">
                <div className="payment__row payment__row--1 row">
                    <form className="payment__form" onSubmit={handleSubmit(onSubmit, onError)}>
                        <h4 className="payment__title payment__title--delivery h4">Delivery</h4>

                        <label htmlFor="paymentInputName" className="payment__label payment__label--name label">
                            <span className="label__text">Full Name* <span className="label__text--error">{errors.full_name?.message}</span></span>

                            <input
                                type="text"
                                className="payment__input payment__input--name input"
                                id="paymentInputName"
                                placeholder="Your Full Name"
                                {...register("full_name")}
                            />
                        </label>
                        <label htmlFor="paymentInputEmail" className="payment__label payment__label--name label">
                            <span className="label__text">Your Email* <span className="label__text--error">{errors.email?.message}</span></span>

                            <input
                                type="email"
                                className="payment__input payment__input--name input"
                                id="paymentInputEmail"
                                placeholder="Your Email Address"
                                {...register("email")}
                            />
                        </label>

                        <label htmlFor="paymentInputCompany" className="payment__label payment__label--company label">
                            Company*

                            <input
                                type="text"
                                className="payment__input payment__input--company input"
                                id="paymentInputCompany"
                                placeholder="Your Company Name"
                                {...register("company")}
                            />
                        </label>

                        <label htmlFor="paymentInputAddress" className="payment__label payment__label--address label">
                            <span className="label__text">Address* <span className="label__text--error">{errors.address?.message}</span></span>

                            <input
                                type="text"
                                className="payment__input payment__input--address input"
                                id="paymentInputAddress"
                                placeholder="Your Address"
                                {...register("address")}
                            />
                        </label>

                        <h4 className="payment__title payment__title--card h4">Card</h4>

                        <div className="payment__card-wrap">
                            <label htmlFor="paymentInputCardDate" className="payment__label payment__label--card-date label">
                                <span className="label__text">Month/Year* <span className="label__text--error">{errors.date?.message}</span></span>

                                <Controller
                                    name="date"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="MM/YY"
                                            maxLength={5}
                                            className="payment__input payment__input--card-date input"
                                            id="paymentInputCardDate"
                                            value={field.value}
                                            onChange={(e) => {
                                                let value = e.target.value.replace(/[^\d]/g, "")
                                                if (value.length > 4) value = value.slice(0, 4)
                                                if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2)
                                                field.onChange(value)
                                            }}
                                        />
                                    )}
                                />
                            </label>

                            <label htmlFor="paymentInputCVV" className="payment__label payment__label--cvv label">
                                <span className="label__text">CVV2* <span className="label__text--error">{errors.cvv?.message}</span></span>

                                <input
                                    type="text"
                                    className="payment__input payment__input--cvv input"
                                    id="paymentInputCVV"
                                    placeholder="000"
                                    maxLength={3}
                                    {...register("cvv")}
                                />
                            </label>

                            <label htmlFor="paymentInputCardNumber" className="payment__label payment__label--card-number label">
                                <span className="label__text">Card Number* <span className="label__text--error">{errors.card?.message}</span></span>

                                <Controller
                                    name="card"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="XXXX-XXXX-XXXX-XXXX"
                                            maxLength={19}
                                            className="payment__input payment__input--card-number input"
                                            id="paymentInputCardNumber"
                                            value={field.value}
                                            onChange={(e) => {
                                                let rawValue = e.target.value.replace(/[^\d]/g, "").slice(0, 16)

                                                const formatted = rawValue.match(/.{1,4}/g)?.join(" ") || ""

                                                field.onChange(formatted)
                                            }}
                                        />
                                    )}
                                />
                            </label>
                        </div>

                        <div className="payment__details-wrap">
                            <h4 className="payment__title payment__title--details h4">Details</h4>

                            <h6 className="payment__details">Name: {full_name}</h6>
                            <h6 className="payment__details">Email: {email}</h6>
                            <h6 className="payment__details">Company: {company}</h6>
                            <h6 className="payment__details">Address: {address}</h6>
                            <h6 className="payment__details">Card number: {card}</h6>
                            <h6 className="payment__details">Total products quantity: {totalCount}</h6>
                            <h6 className="payment__details">Taxes: 2.00$</h6>
                            <h6 className="payment__details">Delivery: 5.00$</h6>

                            <h3 className="payment__price h3">Total price: {totalPrice}$</h3>

                            <input
                                type="submit"
                                className="payment__input payment__input--submit button button--blue"
                                id="paymentInputSubmit"
                                value={`Pay ${totalPrice}$`}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PaymentSection