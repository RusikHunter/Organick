import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import ThankYouSection from "../../components/ThankYouSection/ThankYouSection"

function ThankYouPage() {
    useSetCurrentPage("thankyou")

    return (
        <>
            <ThankYouSection />
        </>
    )
}

export default ThankYouPage