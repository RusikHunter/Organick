import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import ContactUsBackgroundImage from "@assets/images/background/background-contact-us.webp"
import ContactUsBackgroundBlurredImage from "@assets/images/background/background-contact-us-blurred.webp"
import ContactUsSection from "@components/ContactUsSection/ContactUsSection"
import LocationSection from "@components/LocationSection/LocationSection"

function ContactPage() {
    return (
        <>
            <SubIntroBlock title="Contact Us" backgroundImageURL={ContactUsBackgroundImage} blurredBackgroundImageURL={ContactUsBackgroundBlurredImage} />
            <ContactUsSection />
            <LocationSection />
        </>
    )
}

export default ContactPage