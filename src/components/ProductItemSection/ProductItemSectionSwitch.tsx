import { useState } from "react"
import type { ProductItemSectionProps } from "@interfaces/productItemSectionProps"
import Loader from "@components/Loader/Loader"

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

            {activeSide === 'left'
                ?
                product
                    ?
                    <p className="product-item__info text">{product.description}</p>
                    :
                    <Loader text={"Loading..."} />
                :
                <p className="product-item__info text">This product is grown by our accredited farmers and is 100% organic.</p>
            }
        </>
    )
}

export default ProductItemSectionSwitch