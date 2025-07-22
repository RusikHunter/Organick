import { useState } from "react"
import type { ProductItemSectionProps } from "@interfaces/productItemSectionProps"

function ProductItemSectionSwitch({ product, id }: ProductItemSectionProps) {
    const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')

    void id

    return (
        <>
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
                    ?
                    product
                        ? product.description
                        : 'Loading...'
                    : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem ex nobis adipisci maxime doloribus neque aut, possimus odit tempora repellat quae ducimus. Est, iusto? Laudantium beatae accusantium recusandae omnis. Est, iusto? Laudantium beatae accusantium recusandae omnis.'}
            </p>
        </>
    )
}

export default ProductItemSectionSwitch