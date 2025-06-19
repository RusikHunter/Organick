import "./LocationSection.scss"

function LocationSection() {
    return (
        <section className="location">
            <div className="location__inner container">
                <div className="location__row location__row--1 row">
                    <div className="location__column location__column--1 column">
                        <div className="location__block">
                            <div className="location__content-wrap">
                                <span className="location__promo promo">Location</span>

                                <h2 className="location__title h2">Our Farms</h2>

                                <p className="location__text text">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>

                                <ul className="location__list">
                                    <li className="location__list-item">
                                        <address className="location__address">
                                            <span className="location__city">New York, USA:
                                            </span>

                                            <span className="location__street">299 Park Avenue New York,
                                                <br />
                                                New York 10171</span>
                                        </address>
                                    </li>

                                    <li className="location__list-item">
                                        <address className="location__address">
                                            <span className="location__city">London, UK:
                                            </span>

                                            <span className="location__street">30 Stamford Street,
                                                <br />
                                                London SE1 9LQ</span>
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location__row location__row--2 row">
                    <div className="location__column location__column--2 column">
                        <form className="location__form">
                            <label htmlFor="locationInputName" className="location__label location__label--name">
                                Full Name*

                                <input
                                    type="text"
                                    className="location__input location__input--name"
                                    id="locationInputName"
                                    placeholder="Your Full Name"
                                />
                            </label>

                            <label htmlFor="locationInputEmail" className="location__label location__label--name">
                                Your Email*

                                <input
                                    type="email"
                                    className="location__input location__input--name"
                                    id="locationInputEmail"
                                    placeholder="Your Email Address" />
                            </label>

                            <label htmlFor="locationInputCompany" className="location__label location__label--company">
                                Company*

                                <input
                                    type="text"
                                    className="location__input location__input--company"
                                    id="locationInputCompany"
                                    placeholder="Your Company Name" />
                            </label>

                            <label htmlFor="locationInputSubject" className="location__label location__label--subject">
                                Subject*

                                <input
                                    type="text"
                                    className="location__input location__input--subject"
                                    id="locationInputSubject"
                                    placeholder="How Can We Help" />
                            </label>

                            <label htmlFor="locationTextareaMessage" className="location__label location__label--message">
                                Message*

                                <textarea
                                    id="locationTextareaMessage"
                                    className="location__input location__input--message"
                                    placeholder="Your Message"
                                    rows={11}
                                ></textarea>
                            </label>

                            <div className="location__submit-wrap">
                                <input
                                    type="submit"
                                    className="location__input location__input--submit button button--blue"
                                    id="locationInputSubmit"
                                    value="Send Message"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSection