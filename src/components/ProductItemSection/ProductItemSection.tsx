import "./ProductItemSection.scss"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useParams } from "react-router-dom"
import type { Product } from "../../interfaces/product"
import ProductItemSectionSwitch from "./ProductItemSectionSwitch"
import ProductItemSectionData from "./ProductItemSectionData"

function ProductItemSection() {
    const id = Number(useParams().id ?? '')
    const product: Product = useAppSelector(state => state.client.products[id])

    return (
        <section className="product-item">
            <div className="product-item__inner container">
                <div className="product-item__row product-item__row--1 row">
                    <ProductItemSectionData product={product} id={id} />
                </div>

                <div className="product-item__row product-item__row--2 row">
                    <div className="product-item__column product-item__column--3 column">
                        <ProductItemSectionSwitch product={product} id={id} />
                    </div>
                </div>
            </div >
        </section >
    )
}

export default ProductItemSection