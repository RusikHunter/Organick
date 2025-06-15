import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ChangelogPage() {
    useSetCurrentPage("changelog")

    return (
        <>
            <h1>ChangelogPage</h1>
        </>
    )
}

export default ChangelogPage