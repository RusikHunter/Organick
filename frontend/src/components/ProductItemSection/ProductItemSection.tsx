import "./ProductItemSection.scss"
import { useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useParams } from "react-router-dom"
import type { Product } from "../../interfaces/product"

function ProductItemSection() {
    const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')
    const [productCount, setProductCount] = useState<string>('0')

    const id = Number(useParams().id ?? '') - 1
    const product: Product = useAppSelector(state => state.client.products[id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductCount(e.target.value)
    }

    // ! todo --> loading...

    return (
        product && <section className="product-item">
            <div className="product-item__inner container">
                <div className="product-item__row product-item__row--1 row">
                    <div className="product-item__column product-item__column--1 column">
                        <span className="product-item__category">{product.type}</span>

                        <img src={product.imageURL} alt="Nuts" className="product-item__image" width={591} height={563} />
                    </div>

                    <div className="product-item__column product-item__column--2 column">
                        <h3 className="product-item__title h3">{product.title}</h3>

                        <div className="product-item__rate">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    key={index}
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${index + 1 > product.rating ? 'product-item__star--empty' : ''}`}
                                >
                                    <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48263L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                                </svg>
                            ))}
                        </div>

                        <div className="product-item__price-wrap">
                            <span className="product-item__price--sale">
                                <s>
                                    {Number.isInteger(product.price) ? `${product.price}.00` : product.price}$
                                </s>
                            </span>

                            <span className="product-item__price h6">
                                {Number.isInteger(product.discountPrice) ? `${product.discountPrice}.00` : product.discountPrice}$
                            </span>
                        </div>

                        <p className="product-item__description text">{product.description}</p>

                        <form className="product-item__form">
                            <label htmlFor="productItemInputCount" className="product-item__label product-item__label--count">
                                Quantity:

                                <input
                                    type="number"
                                    className="product-item__input product-item__input--count"
                                    id="productItemInputCount"
                                    value={productCount}
                                    onChange={handleChange}
                                />
                            </label>

                            <button type="submit" className="product-item__input product-item__input--submit button button--blue">
                                Add To Cart

                                <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path className="button__svg-arrow" d="M9.97641 6.12891L13.371 9.19342L9.97641 12.2579M12.8995 9.19342H6.01611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="product-item__row product-item__row--2 row">
                    <div className="product-item__column product-item__column--3 column">
                        <div className="product-item__switch-wrap">
                            <button
                                className={`product-item__button product-item__button--description${activeSide === 'left' ? ` product-item__button--active` : ``}`}
                                onClick={() => {
                                    setActiveSide('left')
                                }}
                            >
                                Product Description
                            </button>
                            <button
                                className={`product-item__button product-item__button--additional${activeSide === 'right' ? ` product-item__button--active` : ``}`}
                                onClick={() => {
                                    setActiveSide('right')
                                }}
                            >
                                Additional Info
                            </button>
                        </div>

                        <p className="product-item__info text">
                            {activeSide === 'left'
                                ? product.description
                                : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem ex nobis adipisci maxime doloribus neque aut, possimus odit tempora repellat quae ducimus. Est, iusto? Laudantium beatae accusantium recusandae omnis. Est, iusto? Laudantium beatae accusantium recusandae omnis.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItemSection