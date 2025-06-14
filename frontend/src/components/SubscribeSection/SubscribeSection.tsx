import "./SubscribeSection.scss"

function SubscribeSection() {
    return (
        <section className="subscribe">
            <div className="subscribe__inner container">
                <div className="subscribe__row row">
                    <div className="subscribe__column column">
                        <div className="subscribe__content-block">
                            <div className="subscribe__text-wrap">
                                <h2 className="subscribe__title h2">Subscribe to our Newsletter</h2>
                            </div>

                            <form className="subscribe__form">
                                <label htmlFor="subscribeInputEmail" className="subscribe__label subscribe__label--email">
                                    <input type="email" id="subscribeInputEmail" placeholder="Your Email Address" className="subscribe__input subscribe__input--email" />
                                </label>

                                {/* todo fix hover effect of email */}

                                <label htmlFor="subscribeInputEmail" className="subscribe__label subscribe__label--submit">
                                    <input type="submit" id="subscribeInputEmail" value="Subscribe" className="subscribe__input subscribe__input--submit button button--blue" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection