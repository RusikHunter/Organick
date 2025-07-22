import "./ContactUsSection.scss"
import ContactUsSectionImage from "./ContactUsSectionImage"
import ContactUsSectionContent from "./ContactUsSectionContent"
import SocialNetworksNavigation from "@components/SocialNetworksNavigation/SocialNetworksNavigation"

function ContactUsSection() {
    return (
        <section className="contact-us">
            <div className="contact-us__inner container">
                <div className="contact-us__row row">
                    <div className="contact-us__column contact-us__column--1 column">
                        <ContactUsSectionImage />
                    </div>

                    <div className="contact-us__column contact-us__column--2 column">
                        <ContactUsSectionContent />

                        <SocialNetworksNavigation />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection