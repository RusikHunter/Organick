import "./ProductsWrap.scss"
import ProductCard from "../ProductCard/ProductCard"

function ProductsWrap() {
    return (
        <article className="products-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </article>
    )
}

export default ProductsWrap