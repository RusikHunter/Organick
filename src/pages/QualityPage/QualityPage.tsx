import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import QualityBackgroundImage from "../../images/images/background-quality.png"
import QualitySection from "../../components/QualitySection/QualitySection"

function QualityPage() {
    return (
        <>
            <SubIntroBlock title="Quality Standard" backgroundImageURL={QualityBackgroundImage} />
            <QualitySection />
        </>
    )
}

export default QualityPage