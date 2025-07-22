function LocationSectionBlock() {
    return (
        <div className="location__block">
            <div className="location__content-wrap">
                <span className="location__promo promo">Location</span>

                <h2 className="location__title h2">Our Farms</h2>

                <p className="location__text text">We work with organic farms dedicated to sustainable and eco-friendly practices, ensuring the highest quality products from soil to table.</p>

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
    )
}

export default LocationSectionBlock