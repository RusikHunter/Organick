import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"

import ServicesBackgroundImage from "../../assets/images/background/background-services.webp"
import ServicesBackgroundBlurredImage from "../../assets/images/background/background-services-blurred.webp"

import GrowSection from "../../components/GrowSection/GrowSection"
import VideoSection from "../../components/VideoSection/VideoSection"

function ServicesPage() {
    return (
        <>
            <SubIntroBlock title="Services" backgroundImageURL={ServicesBackgroundImage} blurredBackgroundImageURL={ServicesBackgroundBlurredImage} />
            <GrowSection />
            <VideoSection />
        </>
    )
}

export default ServicesPage