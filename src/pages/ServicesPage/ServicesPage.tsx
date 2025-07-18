import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import ServicesBackgroundImage from "../../images/images/background-services.png"
import GrowSection from "../../components/GrowSection/GrowSection"
import VideoSection from "../../components/VideoSection/VideoSection"

function ServicesPage() {
    return (
        <>
            <SubIntroBlock title="Services" backgroundImageURL={ServicesBackgroundImage} />
            <GrowSection />
            <VideoSection />
        </>
    )
}

export default ServicesPage