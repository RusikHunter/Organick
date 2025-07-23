import React, { useCallback } from "react"
import "./PaymentSection.scss"
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import type { PaymentFormValues } from "@interfaces/paymentFormValues"
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"
import { SERVICE_ID_ORDERS, TEMPLATE_ID_ORDERS, PUBLIC_KEY_ORDERS } from "@config/emailjs-keys"
import { setCart } from "@store/reducers/clientReducer"
import { useAppDispatch } from "@hooks/useAppDispatch"
import PaymentSectionDelivery from "./PaymentSectionDelivery"
import PaymentSectionCard from "./PaymentSectionCard"
import PaymentSectionDetails from "./PaymentSectionDetails"

const schema = yup.object().shape({
    full_name: yup.string().required("This field is required"),
    email: yup.string().email("Enter correct email").required("This field is required"),
    company: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    card: yup.string().required("This field is required").matches(/^(\d{4} \d{4} \d{4} \d{4})$/, "Card number must be in format XXXX-XXXX-XXXX-XXXX"),
    date: yup.string().required("This field is required").matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Date must be in MM/YY format with valid month"),
    cvv: yup.string().required("This field is required").matches(/^\d{3}$/, "CVV must be exactly 3 digits")
})

function PaymentSection() {
    const navigate: NavigateFunction = useNavigate()
    const dispatch = useAppDispatch()

    const { state } = useLocation()

    const { totalPrice, totalCount } = state || {}

    const { register, control, watch, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const full_name = watch("full_name")
    const email = watch("email")
    const company = watch("company")
    const address = watch("address")
    const card = watch("card")

    const onSubmit: SubmitHandler<PaymentFormValues> = useCallback(async (data) => {
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
    }, [])

    const onError = useCallback((): void => {
        toast.error("Incorrect form data!")
    }, [])

    return (
        <section className="payment">
            <div className="payment__inner container">
                <div className="payment__row payment__row--1 row">
                    <form className="payment__form" onSubmit={handleSubmit(onSubmit, onError)}>
                        <PaymentSectionDelivery register={register} errors={errors} />

                        <PaymentSectionCard control={control} register={register} errors={errors} />

                        <PaymentSectionDetails
                            full_name={full_name}
                            email={email}
                            company={company}
                            address={address}
                            card={card}
                            totalCount={totalCount}
                            totalPrice={totalPrice}
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default React.memo(PaymentSection)