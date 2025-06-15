import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function QualityPage() {
    useSetCurrentPage("quality")

    return (
        <>
            <h1>QualityPage</h1>
        </>
    )
}

export default QualityPage