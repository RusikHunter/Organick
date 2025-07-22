import type { Control } from "react-hook-form"
import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { PaymentFormValues } from "../interfaces/paymentFormValues"

export interface PaymentSectionCardProps {
    control: Control<PaymentFormValues>
    register: UseFormRegister<PaymentFormValues>
    errors: FieldErrors<PaymentFormValues>
}