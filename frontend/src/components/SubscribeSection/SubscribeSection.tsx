function SubscribeSection() {
    return (
        <section className="subscribe">
            <div className="subscribe__inner container">
                <div className="subscribe__row row">
                    <div className="subscribe__column column">
                        <div className="subscribe__content-block">
                            <div className="subscribe__text-wrap">
                                <h2 className="subscribe__title h2"></h2>
                            </div>

                            <form className="subscribe__form">
                                <label htmlFor="subscribeInputEmail" className="subscribe__label">
                                    <input type="email" id="subscribeInputEmail" className="subscribe__input subscribe__input--email" />
                                </label>

                                <label htmlFor="subscribeInputEmail" className="subscribe__label">
                                    <input type="submit" id="subscribeInputEmail" className="subscribe__input subscribe__input--submit button" />
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