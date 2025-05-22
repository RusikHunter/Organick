import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "../../components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "../../images/images/natural-food.png"
import CouponsSection from "../../components/CouponsSection/CouponsSection"
import BelieveSection from "../../components/BelieveSection/BelieveSection"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection"
import EcoSection from "../../components/EcoSection/EcoSection"
import CategoriesListSection from "../../components/CategoriesListSection/CategoriesListSection"

function MainPage() {
    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} />
            <CouponsSection />
            <BelieveSection />
            <ReviewsSection />
            <EcoSection />
            <CategoriesListSection />
        </>
    )
}

export default MainPage