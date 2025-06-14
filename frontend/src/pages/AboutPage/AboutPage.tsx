import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import AboutUsBackgroundImage from "../../images/images/background-about-us.png"
import CreativeSection from "../../components/CreativeSection/CreativeSection"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"

function AboutPage() {
    return (
        <>
            <SubIntroBlock title="About Us" backgroundImageURL={AboutUsBackgroundImage} />
            <CreativeSection />
            <WhyUsSection />
        </>
    )
}

export default AboutPage