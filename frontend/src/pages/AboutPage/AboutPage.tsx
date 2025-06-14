import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import AboutUsBackgroundImage from "../../images/images/background-about-us.png"
import CreativeSection from "../../components/CreativeSection/CreativeSection"

function AboutPage() {
    return (
        <>
            <SubIntroBlock title="About Us" backgroundImageURL={AboutUsBackgroundImage} />
            <CreativeSection />
        </>
    )
}

export default AboutPage