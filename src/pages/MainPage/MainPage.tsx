import IntroBlock from "@components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "@components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "@assets/images/background/natural-food.webp"
import NaturalFoodBlurredImage from "@assets/images/background/natural-food-blurred.webp"
import CouponsSection from "@components/CouponsSection/CouponsSection"
import BelieveSection from "@components/BelieveSection/BelieveSection"
import OurProductsSection from "@components/OurProductsSection/OurProductsSection"
import ReviewsSection from "@components/ReviewsSection/ReviewsSection"
import OrganicSection from "@components/OrganicSection/OrganicSection"
import EcoSection from "@components/EcoSection/EcoSection"
import CategoriesListSection from "@components/CategoriesListSection/CategoriesListSection"
import MoreNewsSection from "@components/MoreNewsSection/MoreNewsSection"

function MainPage() {
    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} blurredBackgroundImageURL={NaturalFoodBlurredImage} />
            <CouponsSection />
            <BelieveSection />
            <OurProductsSection />
            <ReviewsSection />
            <OrganicSection />
            <EcoSection />
            <CategoriesListSection />
            <MoreNewsSection />
        </>
    )
}

export default MainPage