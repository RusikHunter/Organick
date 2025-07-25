import React, { useCallback } from "react"
import "./PaymentSection.scss"
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"
import { SERVICE_ID_ORDERS, TEMPLATE_ID_ORDERS, PUBLIC_KEY_ORDERS } from "@config/emailjs-keys"
import { setCart } from "@store/reducers/clientReducer"
import { useAppDispatch } from "@hooks/useAppDispatch"
import PaymentSectionDelivery from "./PaymentSectionDelivery"
import PaymentSectionCard from "./PaymentSectionCard"
import PaymentSectionDetails from "./PaymentSectionDetails"
import { Routes } from "@config/routes"

export type PaymentFormValues = {
    full_name: string
    email: string
    company: string
    address: string,
    card: string,
    date: string,
    cvv: string
}

type PaymentTemplateParams = {
    id: string,
    full_name: string,
    to_email: string,
    email: string,
    company: string,
    address: string,
    card: string,
    products_count: number,
    total_price: number
}

type PaymentState = {
    state: {
        totalCount: number,
        totalPrice: number
    }
}

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

    const { state } = useLocation() as PaymentState

    if (state === null) {
        navigate(Routes.CART)
    }

    const { totalPrice, totalCount } = state || {}

    const { register, control, watch, handleSubmit, formState: { errors }, reset } = useForm<PaymentFormValues>({
        resolver: yupResolver(schema)
    })

    const full_name: string = watch("full_name")
    const email: string = watch("email")
    const company: string = watch("company")
    const address: string = watch("address")
    const card: string = watch("card")

    const onSubmit: SubmitHandler<PaymentFormValues> = useCallback(async (data) => {
        const templateParams: PaymentTemplateParams = {
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
            navigate(Routes.THANK_YOU)
        } catch (error) {
            toast.error("Error creating.")
            reset()
            navigate(Routes.CART)
        }
    }, [dispatch, navigate, reset, totalCount, totalPrice])

    const onError = useCallback((): void => {
        toast.error("Incorrect form data!")
    }, [dispatch, navigate, reset, totalCount, totalPrice])

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