import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function LicensesPage() {
    useSetCurrentPage("licenses")

    return (
        <>
            <h1>LicensesPage</h1>
        </>
    )
}

export default LicensesPage