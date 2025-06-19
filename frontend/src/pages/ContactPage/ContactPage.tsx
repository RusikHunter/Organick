import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import ContactUsBackgroundImage from "../../images/images/background-contact-us.png"
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection"
import LocationSection from "../../components/LocationSection/LocationSection"

function ContactPage() {
    useSetCurrentPage("contactus")

    return (
        <>
            <SubIntroBlock title="Contact Us" backgroundImageURL={ContactUsBackgroundImage} />
            <ContactUsSection />
            <LocationSection />
        </>
    )
}

export default ContactPage