import "./WhyUsSection.scss"
import GreenVegetablesImage from "../../images/images/green-vegetables.png"
import ReturnPolicyIcon from "../../images/icons/return-policy.svg"
import FreshIcon from "../../images/icons/fresh.svg"
import SupportIcon from "../../images/icons/support.svg"
import PaymentIcon from "../../images/icons/payment.svg"

function WhyUsSection() {
    return (
        <section className="whyus">
            <div className="whyus__inner container">
                <div className="whyus__row whyus__row--1 row">
                    <div className="whyus__column whyus__column--1 column">
                        <span className="whyus__promo promo">Why Choose us?</span>

                        <h2 className="whyus__title h2">We do not buy from the
                            open market & traders.</h2>

                        <p className="whyus__description text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                        <dl className="whyus__description-list">
                            <dt className="whyus__description-term">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693" />
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC" />
                                </svg>

                                100% Natural Product
                            </dt>
                            <dd className="whyus__description-definition text">Simply dummy text of the printing and typesetting industry Lorem Ipsum</dd>

                            <dt className="whyus__description-term">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693" />
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC" />
                                </svg>

                                Increases resistance
                            </dt>
                            <dd className="whyus__description-definition text">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</dd>
                        </dl>
                    </div>

                    <div className="whyus__column whyus__column--2 column">
                        <img src={GreenVegetablesImage} alt="Green vegetables and fruits" className="whyus__image" width={678} height={579} />
                    </div>
                </div>

                <div className="whyus__row whyus__row--2 row">
                    <div className="whyus__column whyus__column--3 column">
                        <ul className="whyus__features-list">
                            <li className="whyus__feature-list-item">
                                <div className="whyus__feature feature">
                                    <div className="feature__icon-wrap">
                                        <img className="feature__icon" src={ReturnPolicyIcon} alt="Return Policy" width={46} height={50} />
                                    </div>

                                    <h6 className="feature__title h6">Return Policy</h6>

                                    <p className="feature__description text">Simply dummy text of the printintypesetting industry.</p>
                                </div>
                            </li>

                            <li className="whyus__feature-list-item">
                                <div className="whyus__feature feature">
                                    <div className="feature__icon-wrap">
                                        <img className="feature__icon" src={FreshIcon} alt="Fresh" width={45} height={48} />
                                    </div>

                                    <h6 className="feature__title h6">100% Fresh</h6>

                                    <p className="feature__description text">Simply dummy text of the printintypesetting industry.</p>
                                </div>
                            </li>

                            <li className="whyus__feature-list-item">
                                <div className="whyus__feature feature">
                                    <div className="feature__icon-wrap">
                                        <img className="feature__icon" src={SupportIcon} alt="Support" width={44} height={47} />
                                    </div>

                                    <h6 className="feature__title h6">Support 24/7</h6>

                                    <p className="feature__description text">Simply dummy text of the printintypesetting industry.</p>
                                </div>
                            </li>

                            <li className="whyus__feature-list-item">
                                <div className="whyus__feature feature">
                                    <div className="feature__icon-wrap">
                                        <img className="feature__icon" src={PaymentIcon} alt="Payment" width={51} height={44} />
                                    </div>

                                    <h6 className="feature__title h6">Secured Payment</h6>

                                    <p className="feature__description text">Simply dummy text of the printintypesetting industry.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection