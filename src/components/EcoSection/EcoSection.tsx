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
                                <dd className="eco__description-definition text">We began with a simple mission — to make organic, healthy food more accessible to everyone. Our commitment to quality and sustainability guides everything we do.
                                </dd>

                                <dt className="eco__description-term h6">Learn How to Grow Yourself</dt>
                                <dd className="eco__description-definition text">We believe knowledge is key. That’s why we share tips, tools, and guidance to help you start your own organic garden and live a greener lifestyle.</dd>

                                <dt className="eco__description-term h6">Farming Strategies of Today</dt>
                                <dd className="eco__description-definition text">Modern farming meets tradition in our approach — using eco-conscious methods, supporting local farmers, and protecting nature with every harvest.</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoSection