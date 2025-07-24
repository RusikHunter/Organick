import React, { useCallback } from "react"
import type { PaymentSectionCardProps } from "@interfaces/paymentSectionCardProps"
import { Controller } from "react-hook-form"

function PaymentSectionCard({ control, register, errors }: PaymentSectionCardProps) {
    const handleDateChange = useCallback(
        (fieldOnChange: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>): void => {
            let value = e.target.value.replace(/[^\d]/g, "")
            if (value.length > 4) value = value.slice(0, 4)
            if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2)
            fieldOnChange(value)
        },
        []
    )

    const handleCardChange = useCallback(
        (fieldOnChange: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>): void => {
            let rawValue = e.target.value.replace(/[^\d]/g, "").slice(0, 16)
            const formatted = rawValue.match(/.{1,4}/g)?.join(" ") || ""
            fieldOnChange(formatted)
        },
        []
    )

    return (
        <>
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
                                onChange={handleDateChange(field.onChange)}
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
                                onChange={handleCardChange(field.onChange)}
                            />
                        )}
                    />
                </label>
            </div>
        </>
    )
}

export default React.memo(PaymentSectionCard)