import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import QualityBackgroundImage from "@assets/images/background/background-quality.webp"
import QualitySection from "@components/QualitySection/QualitySection"

function QualityPage() {
    return (
        <>
            <SubIntroBlock title="Quality Standard" backgroundImageURL={QualityBackgroundImage} />
            <QualitySection />
        </>
    )
}

export default QualityPage