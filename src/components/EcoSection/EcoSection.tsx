import "./EcoSection.scss"
import type { DescriptionListItem } from "../../interfaces/descriptionListItem"

function EcoSection() {
    const descriptionListItems: DescriptionListItem[] = [
        { term: "Start with Our Company First", definition: "We began with a simple mission — to make organic, healthy food more accessible to everyone. Our commitment to quality and sustainability guides everything we do." },
        { term: "Learn How to Grow Yourself", definition: "We believe knowledge is key. That’s why we share tips, tools, and guidance to help you start your own organic garden and live a greener lifestyle." },
        { term: "Farming Strategies of Today", definition: "Modern farming meets tradition in our approach — using eco-conscious methods, supporting local farmers, and protecting nature with every harvest." }
    ]

    return (
        <section className="eco">
            <div className="eco__inner container">
                <div className="eco__row row">
                    <div className="eco__column eco__column--1 column">
                        {/* HACK: empty section, because it uses only backgroundImage as content and styles */}
                    </div>
                    <div className="eco__column eco__column--2 column">
                        <div className="eco__content">
                            <span className="eco__promo promo">Eco Friendly</span>
                            <h2 className="eco__title h2">Econis is a Friendly
                                Organic Store</h2>

                            <dl className="eco__description-list">
                                {descriptionListItems.map((listItem, index) => (
                                    <div className="eco__description-list-item" key={index}>
                                        <dt className="eco__description-term h6">{listItem.term}</dt>
                                        <dd className="eco__description-definition text">{listItem.definition}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default EcoSection