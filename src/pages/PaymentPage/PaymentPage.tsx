import PaymentSection from "@components/PaymentSection/PaymentSection"
import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import PaymentBackground from "@assets/images/background/background-our-team.webp"
import PaymentBlurredBackground from "@assets/images/background/background-our-team-blurred.webp"

function PaymentPage() {
    return (
        <>
            <SubIntroBlock title="Payment" backgroundImageURL={PaymentBackground} blurredBackgroundImageURL={PaymentBlurredBackground} />
            <PaymentSection />
        </>
    )
}

export default PaymentPage