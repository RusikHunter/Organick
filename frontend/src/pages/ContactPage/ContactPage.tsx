import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ContactPage() {
    useSetCurrentPage("contactus")

    return (
        <>
            <h1>ContactPage</h1>
        </>
    )
}

export default ContactPage