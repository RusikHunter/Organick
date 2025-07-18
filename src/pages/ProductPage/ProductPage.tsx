import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"

import ShopSingleBackgroundImage from "../../assets/images/background/background-shop-single.webp"
import ShopSingleBackgroundBlurredImage from "../../assets/images/background/background-shop-single-blurred.webp"

import ProductItemSection from "../../components/ProductItemSection/ProductItemSection"
import RelatedSection from "../../components/RelatedSection/RelatedSection"

function ProductPage() {
    return (
        <>
            <SubIntroBlock title="Shop Single" backgroundImageURL={ShopSingleBackgroundImage} blurredBackgroundImageURL={ShopSingleBackgroundBlurredImage} />
            <ProductItemSection />
            <RelatedSection />
        </>
    )
}

export default ProductPage