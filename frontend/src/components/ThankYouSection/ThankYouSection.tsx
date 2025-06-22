import "./ThankYouSection.scss"
import { Link } from "react-router-dom"

function ThankYouSection() {
    return (
        <section className="thank-you">
            <div className="thank-you__inner container">
                <div className="thank-you__row row">
                    <div className="thank-you__column column">
                        <h4 className="thank-you__title h4">
                            Thank you for <span className="thank-you__title--green">your order</span>!
                        </h4>

                        <Link to="/" className="thank-you__link">
                            <button className="thank-you__button button button--blue">
                                Go to Homepage

                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" />
                                    <path className="button__svg-arrow" d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYouSection