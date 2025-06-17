import "./ShopSection.scss"
import ProductsWrap from "../ProductsWrap/ProductsWrap"

function ShopSection() {
    return (
        <section className="shop">
            <div className="shop__inner container">
                <div className="shop__row row">
                    <div className="shop__column column">
                        <ProductsWrap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopSection