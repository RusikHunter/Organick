import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ThankYouPage() {
    useSetCurrentPage("thankyou")

    return (
        <>
            <h1>ThankYouPage</h1>
        </>
    )
}

export default ThankYouPage