import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { PaymentFormValues } from "../interfaces/paymentFormValues"

export interface PaymentSectionDeliveryProps {
    register: UseFormRegister<PaymentFormValues>
    errors: FieldErrors<PaymentFormValues>
}