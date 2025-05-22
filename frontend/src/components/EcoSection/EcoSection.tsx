import "./EcoSection.scss"

function EcoSection() {
    return (
        <section className="eco">
            <div className="eco__inner container">
                <div className="eco__row row">
                    <div className="eco__column eco__column--1 column">

                    </div>
                    <div className="eco__column eco__column--2 column">
                        <div className="eco__content">
                            <span className="eco__promo promo">Eco Friendly</span>
                            <h2 className="eco__title h2">Econis is a Friendly
                                Organic Store</h2>
                            <dl className="eco__description-list">
                                <dt className="eco__description-term h6">Start with Our Company First</dt>
                                <dd className="eco__description-definition text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </dd>

                                <dt className="eco__description-term h6">Learn How to Grow Yourself</dt>
                                <dd className="eco__description-definition text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</dd>

                                <dt className="eco__description-term h6">Farming Strategies of Today</dt>
                                <dd className="eco__description-definition text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoSection