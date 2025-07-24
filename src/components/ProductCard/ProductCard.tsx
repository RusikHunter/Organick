import React from "react"
import "./ProductCard.scss"
import { Link } from "react-router-dom"
import type { ProductCardProps } from "@interfaces/productCardProps"
import ProductBlurredImage from "@assets/images/background/product-blurred.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Routes } from "@config/routes"
import RatingSVG from "@components/RatingSVG/RatingSVG"

function ProductCard({ isCartItem, productData }: ProductCardProps) {
    return (
        <Link
            to={`${Routes.SHOP}/${productData.id}`}
            className={`product-card${isCartItem ? ' product-card--cart-item' : ''}`}
            tabIndex={isCartItem ? -1 : 0}
            style={{ ...(isCartItem ? { transform: "none" } : {}) }}
        >
            <span className="product-card__category">{productData.type}</span>

            <LazyLoadImage
                src={productData.imageURL}
                alt="Fresh Banana"
                className="product-card__image"
                width={336}
                height={375}
                effect="blur"
                placeholderSrc={ProductBlurredImage}
            />

            <h6 className="product-card__title">{productData.title}</h6>

            <div className="product-card__price-wrap">
                <span className="product-card__price--sale"><s>{Number.isInteger(productData.price) ? `${productData.price}.00` : productData.price}$</s></span>

                <span className="product-card__price">{Number.isInteger(productData.discountPrice) ? `${productData.discountPrice}.00` : productData.discountPrice}$</span>

                <div className="product-card__rate">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <RatingSVG index={index} productRating={productData.rating} key={index} />
                    ))}
                </div>
            </div>
        </ Link >
    )
}

export default React.memo(ProductCard)