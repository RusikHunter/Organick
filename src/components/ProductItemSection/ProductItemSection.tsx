import "./ProductItemSection.scss"
import { useAppSelector } from "@hooks/useAppSelector"
import { useNavigate, useParams } from "react-router-dom"
import type { Product } from "@interfaces/product"
import ProductItemSectionSwitch from "./ProductItemSectionSwitch"
import ProductItemSectionData from "./ProductItemSectionData"
import { useEffect } from "react"

function ProductItemSection() {
    const navigate = useNavigate()
    const { id: idParam } = useParams()
    const products = useAppSelector(state => state.client.products)

    const parsedId = Number(idParam)
    const isValidId =
        !isNaN(parsedId) &&
        Number.isInteger(parsedId) &&
        parsedId >= 0 &&
        parsedId < products.length

    useEffect(() => {
        if (products.length === 0) return

        if (!isValidId) {
            navigate("/notfound", { replace: true })
        }
    }, [products, isValidId, navigate])

    if (!isValidId) return null

    const product: Product = products[parsedId]

    return (
        <section className="product-item">
            <div className="product-item__inner container">
                <div className="product-item__row product-item__row--1 row">
                    <ProductItemSectionData product={product} id={parsedId} />
                </div>

                <div className="product-item__row product-item__row--2 row">
                    <div className="product-item__column product-item__column--3 column">
                        <ProductItemSectionSwitch product={product} id={parsedId} />
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ProductItemSection