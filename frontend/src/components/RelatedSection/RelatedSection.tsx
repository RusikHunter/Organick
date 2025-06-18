import "./RelatedSection.scss"
import ProductsWrap from "../ProductsWrap/ProductsWrap"

function RelatedSection() {
    return (
        <section className="related">
            <div className="related__inner container">
                <div className="related__row related__row--1 row">
                    <div className="related__column column">
                        <h2 className="related__title h2">Related Products</h2>
                    </div>
                </div>

                <div className="related__row related__row--2 row">
                    <ProductsWrap defaultCardsCount={4} hasButtonMore={false} />
                </div>
            </div>
        </section>
    )
}

export default RelatedSection