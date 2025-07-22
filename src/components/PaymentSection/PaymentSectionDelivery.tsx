import type { PaymentSectionDeliveryProps } from "@interfaces/paymentSectionDeliveryProps"

function PaymentSectionDelivery({ register, errors }: PaymentSectionDeliveryProps) {
    return (
        <>
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
                <span className="label__text">Company* <span className="label__text--error">{errors.company?.message}</span></span>

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
        </>
    )
}

export default PaymentSectionDelivery