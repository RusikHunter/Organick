import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function PaymentPage() {
    useSetCurrentPage("payment")

    return (
        <>
            <h1>PaymentPage</h1>
        </>
    )
}

export default PaymentPage