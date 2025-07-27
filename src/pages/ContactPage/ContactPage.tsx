import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import ContactUsBackgroundImage from "@assets/images/background/background-contact-us.webp"
import ContactUsSection from "@components/ContactUsSection/ContactUsSection"
import LocationSection from "@components/LocationSection/LocationSection"

function ContactPage() {
    return (
        <>
            <SubIntroBlock title="Contact Us" backgroundImageURL={ContactUsBackgroundImage} />
            <ContactUsSection />
            <LocationSection />
        </>
    )
}

export default ContactPage