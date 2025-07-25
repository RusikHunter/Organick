import React, { useCallback } from "react"
import "./ProductsWrap.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useAppSelector } from "@hooks/useAppSelector"
import { useState } from "react"
import { useParams } from "react-router-dom"
import type { Product } from "@interfaces/product"
import Loader from "@components/Loader/Loader"

//
// In this case, the hasButtonMore prop defines the presence
// of a button that loads additional product cards.
// Not to be confused with the LoadMore button in some
// component sections that redirect the user to the ShopPage.
//

type ProductWrapProps = {
    defaultCardsCount: number
    hasButtonMore?: boolean
    isRelatedProducts?: boolean
}

function ProductsWrap({ defaultCardsCount, hasButtonMore, isRelatedProducts }: ProductWrapProps) {
    const [iteration, setIteration] = useState<number>(1)

    const productsAll: Product[] = useAppSelector(state => state.client.products)
    const { id } = useParams<{ id: string }>()
    const parsedID: number = Number(id)

    const isValidId: boolean = !isNaN(parsedID) && parsedID >= 0 && parsedID < productsAll.length

    let products: Product[] = productsAll

    if (isRelatedProducts && isValidId) {
        const productOfCurrentPage: Product = productsAll[parsedID]

        const productsSortedByType: Product[] = productsAll.filter(product => {
            return product.type === productOfCurrentPage.type && product.id !== productOfCurrentPage.id
        })

        productsSortedByType.sort(() => Math.random() - 0.5)

        products = productsSortedByType
    }

    const cardsCount: number[] = isRelatedProducts && products.length < 4
        ? Array.from({ length: products.length }, (_, i) => i)
        : Array.from({ length: defaultCardsCount * iteration }, (_, i) => i)

    const handleMoreClick = useCallback((): void => {
        setIteration(prev => prev + 1)
    }, [])

    return (
        products.length
            ?
            <article className="products-wrap">
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
            :
            <Loader text={"Loading..."} />
    )
}

export default React.memo(ProductsWrap)