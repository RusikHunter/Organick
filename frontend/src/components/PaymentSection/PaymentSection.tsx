import "./PaymentSection.scss"

function PaymentSection() {
    return (
        <section className="payment">
            <div className="payment__inner container">
                <div className="payment__row payment__row--1 row">
                    <form className="payment__form">
                        <h4 className="payment__title h4">Delivery</h4>

                        <label htmlFor="paymentInputName" className="payment__label payment__label--name">
                            Full Name*

                            <input
                                type="text"
                                className="payment__input payment__input--name"
                                id="paymentInputName"
                                placeholder="Your Full Name"
                            />
                        </label>

                        <label htmlFor="paymentInputEmail" className="payment__label payment__label--name">
                            Your Email*

                            <input
                                type="email"
                                className="payment__input payment__input--name"
                                id="paymentInputEmail"
                                placeholder="Your Email Address" />
                        </label>

                        <label htmlFor="paymentInputCompany" className="payment__label payment__label--company">
                            Company*

                            <input
                                type="text"
                                className="payment__input payment__input--company"
                                id="paymentInputCompany"
                                placeholder="Your Company Name" />
                        </label>

                        <label htmlFor="paymentInputAddress" className="payment__label payment__label--address">
                            Address*

                            <input
                                type="text"
                                className="payment__input payment__input--address"
                                id="paymentInputAddress"
                                placeholder="Your Address" />
                        </label>

                        <h4 className="payment__title h4">Card</h4>

                        <label htmlFor="paymentInputCardDate" className="payment__label payment__label--card-date">
                            Month/Year*

                            <input
                                type="number"
                                className="payment__input payment__input--card-date"
                                id="paymentInputCardDate"
                                placeholder="00/00" />
                        </label>

                        <label htmlFor="paymentInputCVV" className="payment__label payment__label--cvv">
                            CVV2*

                            <input
                                type="number"
                                className="payment__input payment__input--cvv"
                                id="paymentInputCVV"
                                placeholder="000" />
                        </label>

                        <label htmlFor="paymentInputCardNumber" className="payment__label payment__label--card-number">
                            Card Number*

                            <input
                                type="number"
                                className="payment__input payment__input--card-number"
                                id="paymentInputCardNumber"
                                placeholder="000" />
                        </label>

                        <div className="payment__details-wrap">
                            <h4 className="payment__title h4">Details</h4>

                            <h6 className="payment__details">Name: Alex Davidson</h6>
                            <h6 className="payment__details">Email: alexdavidson@gmail.com</h6>
                            <h6 className="payment__details">Company: Apple</h6>
                            <h6 className="payment__details">Address: 88 road, borklyn street, USA</h6>
                            <h6 className="payment__details">Card number: 1234 5678 9101 1123</h6>
                            <h6 className="payment__details">Total products quantity: 2</h6>
                            <h6 className="payment__details">Taxes: 2.00$</h6>
                            <h6 className="payment__details">Delivery: 5.00$</h6>

                            <h3 className="payment__price h3">Total price: 33.00$</h3>

                            <input
                                type="submit"
                                className="payment__input payment__input--submit button button--blue"
                                id="paymentInputSubmit"
                                value="Pay 33.00$"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PaymentSection