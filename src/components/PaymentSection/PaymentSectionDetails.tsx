import type { PaymentSectionDetailsProps } from "../../interfaces/paymentSectionDetailsProps"

function PaymentSectionDetails({ full_name, email, company, address, card, totalCount, totalPrice }: PaymentSectionDetailsProps) {
    return (
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
    )
}

export default PaymentSectionDetails