import "./ProductsWrap.scss"
import ProductCard from "../ProductCard/ProductCard"
import type { ProductWrapProps } from "../../interfaces/productWrapProps"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useState } from "react"
import { useParams } from "react-router-dom"
import type { Product } from "../../interfaces/product"

function ProductsWrap({ defaultCardsCount, hasButtonMore, isRelatedProducts }: ProductWrapProps) {
    const [iteration, setIteration] = useState<number>(1)

    let products = useAppSelector(state => state.client.products)

    if (isRelatedProducts) {
        const id = Number(useParams().id ?? '') - 1
        const productOfCurrentPage: Product = useAppSelector(state => state.client.products[id])

        const productsSortedByType = products.filter(product => {
            return product.type === productOfCurrentPage.type && product.id !== productOfCurrentPage.id
        })

        productsSortedByType.sort(() => Math.random() - 0.5)

        products = productsSortedByType
    }

    let cardsCount = isRelatedProducts && products.length < 4
        ? Array.from({ length: products.length }, (_, i) => i)
        : Array.from({ length: defaultCardsCount * iteration }, (_, i) => i)

    const handleMoreClick = (): void => {
        setIteration(prev => prev + 1)
    }

    return (
        products.length && <article className="products-wrap">
            {cardsCount.map((index) => (
                <ProductCard key={index} productData={products[index]} />
            ))}

            <div className="products-wrap__row row">
                {hasButtonMore && (defaultCardsCount * iteration < products.length) && <button className="products-wrap__button products-wrap__button--more button button--blue" onClick={handleMoreClick}>
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
        </article >
    )
}

export default ProductsWrap