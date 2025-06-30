import "./ProductsWrap.scss"
import ProductCard from "../ProductCard/ProductCard"
import type { ProductWrapProps } from "../../interfaces/productWrapProps"

function ProductsWrap({ defaultCardsCount, hasButtonMore }: ProductWrapProps) {
    const cardsCount = Array.from({ length: defaultCardsCount }, (_, i) => i)

    return (
        <article className="products-wrap">
            {cardsCount.map((index) => (
                <ProductCard key={index} />
            ))}

            <div className="products-wrap__row row">
                {hasButtonMore && <button className="products-wrap__button products-wrap__button--more button button--blue">
                    Add More

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                        <path
                            className="button__svg-arrow"
                            d="M9.5 6V13M6 9.5H13"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </button>}
            </div>
        </article>
    )
}

export default ProductsWrap