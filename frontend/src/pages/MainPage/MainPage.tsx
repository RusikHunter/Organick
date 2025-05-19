import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "../../components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "../../images/images/natural-food.png"
import CouponsSection from "../../components/CouponsSection/CouponsSection"
import BelieveSection from "../../components/BelieveSection/BelieveSection"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection"

function MainPage() {
    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} />
            <CouponsSection />
            <BelieveSection />
            <ReviewsSection />
        </>
    )
}

export default MainPage