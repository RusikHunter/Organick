import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import PaymentSection from "../../components/PaymentSection/PaymentSection"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import PaymentBackground from "../../images/images/background-payment.png"

function PaymentPage() {
    useSetCurrentPage("payment")

    return (
        <>
            <SubIntroBlock title="Payment" backgroundImageURL={PaymentBackground} />
            <PaymentSection />
        </>
    )
}

export default PaymentPage