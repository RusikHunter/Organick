import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function TeamPage() {
    useSetCurrentPage("team")

    return (
        <>
            <h1>TeamPage</h1>
        </>
    )
}

export default TeamPage